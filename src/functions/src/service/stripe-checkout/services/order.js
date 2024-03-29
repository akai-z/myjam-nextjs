'use strict';

const airtable = require('./integrations/airtable');
const checkoutSession = require('./checkout/session');
const lineItems = require('./checkout/line-items');
const tip = require('./checkout/tip');
const Order = require('../models/order');
const OrderItem = require('../models/order/item');

async function create(checkoutSessionId) {
  if (process.env.CHECKOUT_ORDER_CREATE_ENABLED !== 'true') {
    return;
  }

  const checkout = await checkoutSession.get(checkoutSessionId);

  const promotionCodePromise = checkout.promotionCode();
  const itemsPromise = lineItems.lineItemsData(checkoutSessionId);
  const items = lineItemsData(await itemsPromise);
  const promotionCode = await promotionCodePromise;

  const orderData = new Order(checkout, promotionCode).data;
  const completedOrder = await airtable.createRecord(Order.airtableView, orderData);

  await addItems(items, completedOrder.id);
}

function lineItemsData(items) {
  const lineItemsList = [];

  items.forEach((item) => {
    if (!tip.isTipProduct(item.price.product.metadata.type)) {
      lineItemsList.push({ fields: new OrderItem(item).data });
    }
  });

  return lineItemsList;
}

async function addItems(items, orderId) {
  items.forEach((item) => {
    item.fields['order_id'] = [orderId];
  });
  await airtable.createRecord(OrderItem.airtableView, items);
}

module.exports = {
  create,
};

'use strict';

const stripe = require('../integrations/stripe');
const tip = require('./tip');
const crypto = require('../crypto');

async function processedLineItems(lineItems, tipAmount = null) {
  const processedItems = [];
  let processedItem;

  for (const lineItem in lineItems) {
    processedItem = lineItems[lineItem];
    processedItem.price_data.currency = process.env.STRIPE_CURRENCY;

    processedItem.price_data.unit_amount = await lineItemAmount(
      processedItem.price_data.unit_amount,
      processedItem.product_id,
    );

    processedItem.price_data.unit_amount = parseFloat(
      (processedItem.price_data.unit_amount * 100).toFixed(2),
    );

    delete processedItem.product_id;

    processedItems.push(processedItem);
  }

  if (tip.isEnabled() && tipAmount) {
    processedItems.push(tipLineItem(tipAmount));
  }

  return processedItems;
}

async function lineItemsData(checkoutSessionId) {
  return await stripe.lineItemsList(checkoutSessionId);
}

async function calculateSubtotal(lineItems) {
  let subtotal = 0;
  let item;

  for (const lineItem in lineItems) {
    item = lineItems[lineItem];

    item.price_data.unit_amount = await lineItemAmount(
      item.price_data.unit_amount,
      item.product_id,
    );

    subtotal += item.price_data.unit_amount * item.quantity;
  }

  return parseFloat(subtotal.toFixed(2));
}

async function lineItemAmount(amount, productId = null) {
  switch (process.env.STRIPE_ITEM_AMOUNT_MANIPULATION_PROTECTION_TYPE) {
    case 'encryption':
      if (!Number(amount)) {
        amount = await encryptedLineItemAmount(amount, productId);
      }

      break;
  }

  return amount;
}

async function encryptedLineItemAmount(amount, productId) {
  amount = JSON.parse(await crypto.decrypt(amount));

  if (amount['product_id'] !== productId) {
    throw new Error(`Item "${productId}" amount is invalid.`);
  }

  return amount['amount'];
}

function tipLineItem(amount) {
  return feeLineItem(tip.feeProduct, tip.amount(amount));
}

function feeLineItem(feeProduct, amount) {
  return {
    price_data: {
      currency: process.env.STRIPE_CURRENCY,
      product_data: {
        name: feeProduct.name,
        metadata: { type: feeProduct.type },
      },
      unit_amount: amount,
    },
    quantity: 1,
  };
}

module.exports = {
  processedLineItems,
  lineItemsData,
  calculateSubtotal,
};

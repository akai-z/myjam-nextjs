const lineItems = require('./line-items')
const config = require('../config')

async function shippingRateIds(lineItemsData) {
  if (!isEnabled()) {
    return []
  }

  const subtotal = await lineItems.calculateSubtotal(lineItemsData)
  const freeShipping = await isFreeShipping(subtotal)
  const shippingId = freeShipping ? process.env.STRIPE_FREE_SHIPPING_ID : process.env.STRIPE_SHIPPING_FEE_ID

  return [shippingId]
}

function isEnabled() {
  return process.env.STRIPE_SHIPPING_FEE_ENABLED === 'true'
    && (process.env.STRIPE_SHIPPING_FEE_ID || process.env.STRIPE_FREE_SHIPPING_ID)
}

async function isFreeShipping(subtotal) {
  const freeShippingSubtotal = await config.freeShippingSubtotal()
  return freeShippingSubtotal !== null ? subtotal >= freeShippingSubtotal : false
}

module.exports = {
  shippingRateIds
}

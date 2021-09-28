const TipProduct = require('../../models/checkout/line-item/fee/tip')

function amount(amount) {
  return parseFloat((amount * 100).toFixed(2))
}

function isEnabled() {
  return process.env.CHECKOUT_TIPPING_ENABLED === 'true'
}

function isTipProduct(productType) {
  return productType === this.feeProduct.type
}

module.exports = {
  amount,
  isEnabled,
  isTipProduct,
  feeProduct: TipProduct
}

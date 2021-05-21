const TipProduct = require('../../models/checkout/line-item/fee/tip')

function amount(amount) {
  return amount * 100
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

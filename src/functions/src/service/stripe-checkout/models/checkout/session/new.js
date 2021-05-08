const CheckoutSession = require('../session')
const stripe = require('../../../services/integrations/stripe')
const lineItems = require('../../../services/checkout/line-items')
const shipping = require('../../../services/checkout/shipping')

class NewSession extends CheckoutSession {
  constructor(lineItemsData, metadata) {
    super()

    this.lineItemsData = lineItemsData
    this.metadata = typeof metadata === 'object' ? metadata : {}
  }

  async init() {
    const shippingRateIds = await shipping.shippingRateIds(this.lineItemsData)
    const items = await lineItems.processedLineItems(this.lineItemsData, this.metadata.tip_amount)
    const session = await stripe.createCheckoutSession(items, this.metadata, shippingRateIds)

    this.assignSession(session)

    return this
  }
}

module.exports = NewSession

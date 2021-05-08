const stripe = require('./src/service/stripe-checkout/services/integrations/stripe')
const order = require('./src/service/stripe-checkout/services/order')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['POST']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const checkoutSession = stripe.completedCheckoutSession(event.body, event.headers)
    await order.create(checkoutSession.id)

    return response.success()
  } catch (err) {
    return response.error(err)
  }
}


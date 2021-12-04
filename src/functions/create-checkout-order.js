const { httpMethods, responseFactory } = require('./src/common/functions/bootstrap')
const stripe = require('./src/service/stripe-checkout/services/integrations/stripe')
const order = require('./src/service/stripe-checkout/services/order')

const allowedHttpMethods = ['POST']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse(event.httpMethod)

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const checkoutSession = stripe.completedCheckoutSession(event.body, event.headers)
    await order.create(checkoutSession.id)

    return response.success()
  } catch (err) {
    return response.error(err)
  }
}


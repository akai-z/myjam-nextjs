const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const stripe = require('../../functions/src/service/stripe-checkout/services/integrations/stripe')
const order = require('../../functions/src/service/stripe-checkout/services/order')

const allowedHttpMethods = ['POST']

export default function handler(req, res) {
  const response = responseFactory.createNetlifyResponse(req)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const checkoutSession = stripe.completedCheckoutSession(req.body, req.headers)
    await order.create(checkoutSession.id)

    return response.success()
  } catch (err) {
    return response.error(err)
  }
}


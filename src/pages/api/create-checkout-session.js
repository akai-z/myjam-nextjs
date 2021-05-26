const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const checkoutSession = require('../../functions/src/service/stripe-checkout/services/checkout/session')

const allowedHttpMethods = ['POST']

export default function handler(req, res) {
  const response = responseFactory.createNetlifyResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const data = JSON.parse(req.body)
    const session = await checkoutSession.create(data.line_items, data.metadata)

    return response.json({ sessionId: session.id })
  } catch (err) {
    return response.error(err)
  }
}

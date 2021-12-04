const { httpMethods, responseFactory } = require('./src/common/functions/bootstrap')
const checkoutSession = require('./src/service/stripe-checkout/services/checkout/session')

const allowedHttpMethods = ['POST']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse(event.httpMethod)

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const data = JSON.parse(event.body)
    const session = await checkoutSession.create(data.line_items, data.metadata)

    return response.json({ sessionId: session.id })
  } catch (err) {
    return response.error(err)
  }
}

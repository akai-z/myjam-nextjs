const checkoutSession = require('./src/service/stripe-checkout/services/checkout/session')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['POST']

exports.handler = async (event, context, callback) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const data = JSON.parse(event.body)
    const session = await checkoutSession.create(data.line_items, data.metadata)

    return response.json({ sessionId: session.id })
  } catch (err) {
    return response.error(err)
  }
}

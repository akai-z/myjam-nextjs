const { httpMethods, response } = require('./src/common/functions/bootstrap')
const checkoutSession = require('./src/service/stripe-checkout/services/checkout/session')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const { session_id } = event.query
    const session = await checkoutSession.get(session_id)

    return response.json({ 'session': session })
  } catch (err) {
    return response.error(err)
  }
}

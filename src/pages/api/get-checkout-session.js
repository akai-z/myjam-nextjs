const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const checkoutSession = require('../../functions/src/service/stripe-checkout/services/checkout/session')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res, req.method, true)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const { session_id } = req.query
    const session = await checkoutSession.get(session_id)

    response.json({ 'session': session })
  } catch (err) {
    response.error(err)
  }
}
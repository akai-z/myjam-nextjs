const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const checkoutSession = require('../../functions/src/service/stripe-checkout/services/checkout/session')

const allowedHttpMethods = ['POST']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const data = JSON.parse(req.body)
    const session = await checkoutSession.create(data.line_items, data.metadata)

    response.json({ sessionId: session.id })
  } catch (err) {
    response.error(err)
  }
}

'use strict';

const stripe = require('../../functions/src/service/stripe-checkout/services/integrations/stripe');
const order = require('../../functions/src/service/stripe-checkout/services/order');
const {
  httpMethods,
  requestFactory,
  responseFactory,
} = require('../../functions/src/common/functions/bootstrap');

const allowedHttpMethods = ['POST'];

export const config = { api: { bodyParser: false } };

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res);

  try {
    httpMethods.validate(req.method, allowedHttpMethods);

    const request = requestFactory.createVercelRequest(req);
    const body = await request.rawBody();
    const checkoutSession = stripe.completedCheckoutSession(body, req.headers);

    await order.create(checkoutSession.id);

    response.success();
  } catch (err) {
    response.error(err);
  }
}

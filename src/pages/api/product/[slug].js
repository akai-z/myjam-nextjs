'use strict';

const {
  httpMethods,
  responseFactory,
} = require('../../../functions/src/common/functions/bootstrap');
const product = require('../../../functions/src/service/catalog/services/product');

const allowedHttpMethods = ['GET'];

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res);

  try {
    httpMethods.validate(req.method, allowedHttpMethods);
    const productData = await product.product(req.query.slug);

    response.json(productData);
  } catch (err) {
    response.error(err);
  }
}

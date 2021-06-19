const { httpMethods, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const product = require('../../functions/src/service/catalog/services/product')

const allowedHttpMethods = ['GET']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)

    const productList = 'type' in req.query
      ? await product.listByType(req.query.type)
      : await product.listAll()

    response.json(productList)
  } catch (err) {
    response.error(err)
  }
}

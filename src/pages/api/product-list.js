const { httpMethods, query, responseFactory } = require('../../functions/src/common/functions/bootstrap')
const product = require('../../functions/src/service/catalog/services/product')

const allowedHttpMethods = ['GET']
const requiredParams = ['type']

export default async function handler(req, res) {
  const response = responseFactory.createVercelResponse(res)

  try {
    httpMethods.validate(req.method, allowedHttpMethods)
    query.validate(req.query, requiredParams)

    const productList = await product.listByType(req.query.type)

    return response.json(productList)
  } catch (err) {
    return response.error(err)
  }
}

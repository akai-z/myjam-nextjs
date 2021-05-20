require('./src/common/functions/config')
const product = require('./src/service/catalog/services/product')
const pathParams = require('./src/common/functions/path-params')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const slug = pathParams.param(event.path)
    const productData = await product.product(slug)

    return response.cachedResponse(response.json(productData))
  } catch (err) {
    return response.error(err)
  }
}

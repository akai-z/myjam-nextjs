const { httpMethods, pathParams, response } = require('./src/common/functions/bootstrap')
const product = require('./src/service/catalog/services/product')

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

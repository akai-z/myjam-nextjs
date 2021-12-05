const { httpMethods, pathParams, responseFactory } = require('./src/common/functions/bootstrap')
const product = require('./src/service/catalog/services/product')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse()

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const slug = pathParams.param(event.path)
    const productData = await product.product(slug)

    return response.json(productData)
  } catch (err) {
    return response.error(err)
  }
}

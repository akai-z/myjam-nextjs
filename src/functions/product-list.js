const { httpMethods, pathParams, responseFactory } = require('./src/common/functions/bootstrap')
const product = require('./src/service/catalog/services/product')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse()

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const params = pathParams.params(event.path)
    const productList = Array.isArray(params) && params.length
      ? await product.listByType(params[0])
      : await product.listAll()

    return response.json(productList)
  } catch (err) {
    return response.error(err)
  }
}

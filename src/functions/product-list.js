const { httpMethods, pathParams, responseFactory } = require('./src/common/functions/bootstrap')
const product = require('./src/service/catalog/services/product')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse()

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const type = pathParams.param(event.path)
    const productList = await product.listByType(type)

    return response.json(productList)
  } catch (err) {
    return response.error(err)
  }
}

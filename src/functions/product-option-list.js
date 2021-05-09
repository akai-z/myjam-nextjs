const productOption = require('./src/service/catalog/services/product/option')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)
    const optionList = await productOption.list()

    return response.cachedResponse(response.json(optionList))
  } catch (err) {
    return response.error(err)
  }
}

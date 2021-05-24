const { httpMethods, response } = require('./src/common/functions/bootstrap')
const productOption = require('./src/service/catalog/services/product/option')

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

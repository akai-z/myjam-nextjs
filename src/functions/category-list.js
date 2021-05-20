require('./src/common/functions/config')
const category = require('./src/service/catalog/services/category')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)
    const categoryList = await category.list()

    return response.cachedResponse(response.json(categoryList))
  } catch (err) {
    return response.error(err)
  }
}

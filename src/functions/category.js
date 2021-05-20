require('./src/common/functions/config')
const category = require('./src/service/catalog/services/category')
const pathParams = require('./src/common/functions/path-params')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)

    const slug = pathParams.param(event.path)
    const categoryData = await category.category(slug)

    return response.cachedResponse(response.json(categoryData))
  } catch (err) {
    return response.error(err)
  }
}

const { httpMethods, pathParams, response } = require('./src/common/functions/bootstrap')
const category = require('./src/service/catalog/services/category')

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

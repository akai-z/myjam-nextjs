const { httpMethods, response } = require('./src/common/functions/bootstrap')
const category = require('./src/service/catalog/services/category')

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

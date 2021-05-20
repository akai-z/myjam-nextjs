require('./src/common/functions/config')
const config = require('./src/service/catalog/services/config')
const httpMethods = require('./src/common/functions/http-methods')
const response = require('./src/common/functions/response')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)
    const configList = await config.list()

    return response.cachedResponse(response.json(configList))
  } catch (err) {
    return response.error(err)
  }
}

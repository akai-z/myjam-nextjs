const { httpMethods, responseFactory } = require('./src/common/functions/bootstrap')
const config = require('./src/service/catalog/services/config')

const allowedHttpMethods = ['GET']

exports.handler = async (event, context) => {
  const response = responseFactory.createNetlifyResponse()

  try {
    httpMethods.validate(event.httpMethod, allowedHttpMethods)
    const configList = await config.list()

    return response.json(configList)
  } catch (err) {
    return response.error(err)
  }
}

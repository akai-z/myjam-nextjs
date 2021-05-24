const { httpMethods, response } = require('./src/common/functions/bootstrap')

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

const HttpError = require('../error/http')
const pathParamsMapper = require('./path-params/mapper')

const pathPrefix = process.env.FUNCTIONS_PATH_PARAMS_PREFIX || '/.netlify/functions/'
let resolvedParams = null

function params(path, requiredParams = []) {
  if (resolvedParams !== null) {
    return resolvedParams
  }

  const params = path.replace(pathPrefix, '').replace(/\?(.*)/, '').split('/')
  params.shift()

  resolvedParams = pathParamsMapper.mappedParams(params, requiredParams)

  return resolvedParams
}

function param(path, paramName = null) {
  const formattedParams = params(path)

  if (Array.isArray(formattedParams)) {
    if (!formattedParams.length) {
      throw new HttpError(400)
    }

    return formattedParams[0]
  }

  if (!(paramName in formattedParams)) {
    throw new HttpError(400)
  }

  return formattedParams[paramName]
}

module.exports = {
  params,
  param
}

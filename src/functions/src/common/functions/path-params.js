const HttpError = require('../error/http')

const pathPrefix = '/.netlify/functions/'
let resolvedParams = null

function params(path, requiredParams = []) {
  if (resolvedParams !== null) {
    return resolvedParams
  }

  const params = path.replace(pathPrefix, '').replace(/\?(.*)/, '').split('/')
  params.shift()

  const paramsLength = params.length

  if (paramsLength === 1) {
    resolvedParams = params
    return resolvedParams
  }

  if (paramsLength % 2 !== 0) {
    throw new HttpError(400)
  }

  resolvedParams = {}
  let paramIndex

  for (paramIndex = 0; paramIndex < paramsLength; paramIndex++) {
    if ((paramIndex + 1) % 2 === 0) {
      resolvedParams[params[paramIndex - 1]] = params[paramIndex]
    }
  }

  for (const requiredParam of requiredParams) {
    if (!(requiredParam in resolvedParams)) {
      throw new HttpError(400, `${requiredParam} is required`)
    }
  }

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

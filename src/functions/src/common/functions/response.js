const HttpError = require('../error/http')

function success(headers = null, body = null) {
  return response(200, body, headers)
}

function error(err) {
  if (err instanceof HttpError) {
    return response(err.code, err.message)
  }

  console.error(err)

  return response(err.statusCode || 500)
}

function json(body) {
  const headers = { 'Content-Type': 'application/json; charset=UTF-8' }
  return success(headers, JSON.stringify(body))
}

function response(code = 200, body = null, headers = null) {
  const response = { statusCode: code }

  if (body !== null) {
    response.body = body
  }

  if (headers !== null) {
    response.headers = headers
  }

  return response
}

module.exports = {
  success,
  error,
  json
}

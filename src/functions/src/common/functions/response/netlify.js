const HttpError = require('../../error/http')

class Response {
  #res = {}
  #cacheMaxAge = process.env.FUNCTIONS_RESPONSE_CACHE_MAX_AGE || 86400

  constructor(httpMethod = 'GET', skipCache = false) {
    this.httpMethod = httpMethod
    this.skipCache = skipCache
  }

  success(headers = null, body = null) {
    this.#setCache()
    return this.#buildResponse(200, body, headers)
  }

  error(err) {
    if (err instanceof HttpError) {
      return this.#buildResponse(err.code, err.message)
    }

    console.error(err)

    return this.#buildResponse(err.statusCode || 500)
  }

  // Currently, it's used for success results only.
  json(body) {
    const headers = { 'Content-Type': 'application/json; charset=UTF-8' }
    return this.success(headers, JSON.stringify(body))
  }

  #setCache = () => {
    if (this.httpMethod === 'GET' && !this.skipCache) {
      this.#addHeaders({ 'Cache-Control': `s-maxage=${this.#cacheMaxAge}` })
    }
  }

  #addHeaders = (headers) => {
    this.#res.headers = 'headers' in this.#res ? { ...this.#res.headers, ...headers } : headers
  }

  #buildResponse = (code = 200, body = null, headers = null) => {
    this.#res.statusCode = code

    if (body !== null) {
      this.#res.body = body
    }

    if (headers !== null) {
      this.#addHeaders(headers)
    }

    return this.#res
  }
}

module.exports = Response

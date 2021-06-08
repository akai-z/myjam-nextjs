const HttpError = require('../../error/http')

class Response {
  #cacheMaxAge = process.env.FUNCTIONS_RESPONSE_CACHE_MAX_AGE || 86400

  constructor(res, httpMethod = 'GET', skipCache = false) {
    this.res = res
    this.httpMethod = httpMethod
    this.skipCache = skipCache
  }

  success(body = null) {
    this.#setCache()
    this.res.send(body)
  }

  error(err) {
    if (err instanceof HttpError) {
      this.res.status(err.code).send(err.message)
      return
    }

    console.error(err)

    this.res.status(err.statusCode || 500).send()
  }

  json(body) {
    this.#setCache()
    this.res.json(body)
  }

  #setCache = () => {
    if (this.httpMethod === 'GET' && !this.skipCache) {
      this.res.setHeader('Cache-Control', `max-age=0, s-maxage=${this.#cacheMaxAge}`)
    }
  }
}

module.exports = Response

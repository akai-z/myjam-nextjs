const HttpError = require('../../error/http')

class Response {
  #cacheMaxAge = process.env.FUNCTIONS_RESPONSE_CACHE_MAX_AGE || 86400

  constructor(res, skipCache = false) {
    this.res = res
    this.skipCache = skipCache
  }

  success(body = null) {
    this.#setCache()
    return this.res.send(body)
  }

  error(err) {
    if (err instanceof HttpError) {
      return this.res.status(err.code).send(err.message)
    }

    console.error(err)

    return this.res.status(err.statusCode || 500).send()
  }

  json(body) {
    this.#setCache()
    return this.res.json(body)
  }

  #setCache = () => {
    if (this.res.req.method === 'GET' && !this.skipCache) {
      this.res.setHeader('Cache-Control', `max-age=0, s-maxage=${this.#cacheMaxAge}`)
    }
  }
}

module.exports = Response

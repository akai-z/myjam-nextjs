const { getSession } = require('next-auth/client')

const authPath = 'auth/signin/auth0'

class NextAuthSession {
  #session = null

  constructor(req) {
    this.req = req
  }

  async session() {
    if (this.#session === null) {
      const req = this.req
      this.#session = await getSession({ req })
    }

    return this.#session
  }

  async isLoggedIn() {
    const session = await this.session()
    return session !== null
  }

  callbackUrl() {
    return authPath + '?callbackUrl=' + this.req.url.replace(/=$/, '')
  }
}

module.exports = NextAuthSession

const NextAuthSession = require('./next-auth-session')

function create(req) {
  return new NextAuthSession(req)
}

module.exports = {
  create
}

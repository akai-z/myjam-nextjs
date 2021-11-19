import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
  providers: [
    Providers.Auth0({
      clientId: process.env.FUNCTIONS_AUTH0_ID,
      clientSecret: process.env.FUNCTIONS_AUTH0_SECRET,
      domain: process.env.FUNCTIONS_AUTH0_DOMAIN
    })
  ],
  callbacks: {
    async redirect(url, baseUrl) {
      return url.startsWith(baseUrl) ? url : (baseUrl + url)
    }
  },
  theme: 'auto'
})

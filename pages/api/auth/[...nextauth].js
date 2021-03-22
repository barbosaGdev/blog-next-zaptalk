import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

export default NextAuth({
    // Configure one or more authentication providers
    providers: [
        Providers.GitHub({
          clientId: "ffe5e998060de58f43b6",
          clientSecret: "e7bd0150ae4186c5ab3f407fe03b94293f33d538"
        })
    ]
})
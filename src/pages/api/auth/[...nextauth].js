import NextAuth from 'next-auth/next'
import GithubProvider from 'next-auth/providers/github'

export default NextAuth({
	providers: [
		GithubProvider({
			clientId: process.env.NEXT_PUBLIC_GITHUB_ID,
			clientSecret: process.env.NEXT_PUBLIC_GITHUB_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
})

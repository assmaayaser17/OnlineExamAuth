import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { signIn } from "next-auth/react";
import { pages } from "next/dist/build/templates/app-page";

export const authOptions = {
  // Configure one or more authentication providers
  pages :{
    signIn:'/login'
    
  },
  providers: [
    
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID  ,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ,

      // authorization: {
      //   params: {
      //     scope: "openid email profile",
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      
    }),
    // ...add more providers here
  ],
}

// export default NextAuth(authOptions)
const handler = NextAuth(authOptions);

export { handler as GET , handler as POST }
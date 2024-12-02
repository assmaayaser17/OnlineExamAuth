// import NextAuth from "next-auth";
// import GoogleProvider from "next-auth/providers/google";
// import { signIn } from "next-auth/react";
// import { pages } from "next/dist/build/templates/app-page";
// import CredentialsProvider from "next-auth/providers/credentials";
// import Email from "next-auth/providers/email";
// import { headers } from "next/headers";

// export const authOptions = {
//   // Configure one or more authentication providers
//   pages: {
//     signIn: "/login",
//   },
//   providers: [
//     // GoogleProvider({
//     //   clientId: process.env.GOOGLE_CLIENT_ID,
//     //   clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     // }),

//     CredentialsProvider(
      
//       { async authorize(credentials, req) {

//         const datavalue ={

//           body: JSON.stringify({
//             email:credentials?.email,
//             password:credentials?.password

//           }),

//           headers: {
//             'content-type':'application/json'
//           },

//           method:'POST'
          
          
          


//         }


//        const res = await fetch('https://exam.elevateegy.com/api/v1/auth/signin',datavalue )
      

//        const user = await res.json()

//        if(user?.user?.email === credentials?.email) return user;

//        return null;




//     } ,

//     credentials:{
//       email:{type : 'email' },
//       password:{type:'password'}
      



//     }
  
//   }),

//   ],
// };

// // export default NextAuth(authOptions)
// const handler = NextAuth(authOptions);

// export { handler as GET, handler as POST };

import NextAuth, { NextAuthOptions } from "next-auth";
import CredentialsProvider  from "next-auth/providers/credentials";

const options = {
  
    providers: [
        CredentialsProvider({

        async authorize(credentials) {

            const fetchOptions = { 
                body: JSON.stringify({email: credentials?.email, password: credentials?.password}),
                headers: { "content-type": "application/json" },
                method: 'POST',
            }

            const res = await fetch('https://exam.elevateegy.com/api/v1/auth/signin', fetchOptions);
            
                
            const user = await res.json();    
            console.log(user)
            console.log(credentials)
                                                                                                                                                                                                                          
            if (user?.user?.email === credentials?.email) return user
                
            return null;

        },

            credentials: {
                email: { type: "email" }, 
                password: { type: "password"},
            }
        })
    ],

    pages: {
        signIn: "/login",
      },
    session: {
    strategy: "jwt",
    },

    
}

const handler = NextAuth(options)


export {handler as GET , handler as POST}
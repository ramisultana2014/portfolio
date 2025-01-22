import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
const authConfig = {
  // in providers we can also use github, facebook
  // in providers we can also use github, facebook
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  // this  callback run with middleware.js
  // // we protect route /account in middleware.js , when we reach this router this authorized function  run and check if there is user or not , if not it redirect us to pages: {
  //   signIn: "/login",
  // },
  callbacks: {
    authorized({ auth, request }) {
      return !!auth?.user; // here we return true or false
    },
  },
  //pages will redirect unlogged  user when we reach protect router
  //  /homePage  to our page.js inside login folder instead of default provided by google
  pages: {
    signIn: "/login",
  },
};
export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
//  auth function for session  we call it in any server component like in Navigation.js
//signIn we will used with page.js inside folder login with SignInButton.js

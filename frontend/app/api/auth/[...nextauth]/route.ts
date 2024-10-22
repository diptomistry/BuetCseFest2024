
import { AuthOptions } from "next-auth";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID || "",
            clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
        }),
    ],

    pages: {
        signIn: "/auth", // Customize the sign-in page if needed
      },
      callbacks: {
        async redirect({ url, baseUrl }) {
          // Always redirect to the dashboard after sign-in
          return "/dashboard";  // Set default redirect after sign-in
        },
      },
    };
    
    const handler = NextAuth(authOptions);
    export { handler as GET, handler as POST };
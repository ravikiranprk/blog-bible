import { getUserByEmail } from "@/server/users";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
// import bcrypt from "bcryptjs";


export const authOptions = {
    providers: [
        CredentialsProvider({
            name: "credentials",
            credentials: {},

            async authorize(credentials, req){
                if(!credentials) console.log("Error! Credentials are not present.")
                const { email, password } = credentials;
                
                try {
                    let user = await getUserByEmail(email);
                    if(Array.isArray(user)) user = user[0];

                    if(!user) {
                        console.log("User not found!")
                        return null;
                    }

                    const passwordsMatch = password === user.password;
                    if(!passwordsMatch) return null;

                    return user;
                } catch (error) {
                    console.log("Error: ", error);
                    return null;
                }
            }
        })
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "signin",
    },
    callbacks: {
        async jwt({ token, user }){
            if(user) {
                token.id = user.id;
                token.email = user.email;
                token.password = user.password;
            }
            return token;
        },
        async session({ session, token }) {
            if(token && session?.user) {
                session.user.id = token.id;
                session.user.email = token.email;
                session.user.password = token.password;
            }
            return session;
        },
    }
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
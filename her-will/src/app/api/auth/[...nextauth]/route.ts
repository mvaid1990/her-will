import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { NextAuthOptions } from 'next-auth';
import pool from '@/lib/db';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      try {
        // Check if user exists in database
        const existingUser = await pool.query(
          'SELECT * FROM users WHERE email = $1',
          [user.email]
        );

        if (existingUser.rows.length === 0) {
          // Create new user
          await pool.query(
            'INSERT INTO users (email, name, created_at) VALUES ($1, $2, NOW())',
            [user.email, user.name]
          );
        } else {
          // Update last login
          await pool.query(
            'UPDATE users SET updated_at = NOW() WHERE email = $1',
            [user.email]
          );
        }

        return true;
      } catch (error) {
        console.error('Error in signIn callback:', error);
        return false;
      }
    },
    async session({ session, token }) {
      if (session.user) {
        // Get user ID from database
        const result = await pool.query(
          'SELECT id, email, name, phone, age FROM users WHERE email = $1',
          [session.user.email]
        );

        if (result.rows.length > 0) {
          session.user.id = result.rows[0].id;
          session.user.phone = result.rows[0].phone;
          session.user.age = result.rows[0].age;
        }
      }
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    error: '/auth/error',
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

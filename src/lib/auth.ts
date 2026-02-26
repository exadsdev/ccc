import { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { upsertAdminUser } from '@/lib/jsonDb';

// Simple password comparison (in production use bcrypt)
function comparePasswords(plain: string, stored: string): boolean {
  return plain === stored;
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/admin/login',
    error: '/admin/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        const adminEmail = process.env.ADMIN_EMAIL;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminEmail || !adminPassword) return null;

        if (credentials.email === adminEmail && comparePasswords(credentials.password, adminPassword)) {
          const user = await upsertAdminUser(credentials.email);

          return {
            id: user.id,
            email: user.email,
            name: user.name || 'Admin',
            role: user.role,
          } as any;
        }

        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = (user as any).role || 'ADMIN';
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).role = (token as any).role || 'ADMIN';
      }
      return session;
    },
  },
};

import type { NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { compare } from 'bcryptjs';

import { prisma } from '@/lib/db/prisma';

function isBcryptHash(value: string) {
  return /^\$2[aby]\$\d{2}\$/.test(value);
}

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credenciais',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Senha', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        try {
          const normalizedEmail = credentials.email.trim().toLowerCase();
          const normalizedPassword = credentials.password.trim();

          const user = await prisma.user.findFirst({
            where: {
              email: {
                equals: normalizedEmail,
                mode: 'insensitive',
              },
            },
          });

          if (!user) {
            console.warn('[auth] login failed: user not found', { email: normalizedEmail });
            return null;
          }

          if (!user.isActive) {
            console.warn('[auth] login failed: inactive user', { email: normalizedEmail, userId: user.id });
            return null;
          }

          const passwordMatches = isBcryptHash(user.passwordHash)
            ? await compare(normalizedPassword, user.passwordHash)
            : normalizedPassword === user.passwordHash;

          if (!passwordMatches) {
            console.warn('[auth] login failed: invalid password', { email: normalizedEmail, userId: user.id });
            return null;
          }

          return {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
          };
        } catch (error) {
          console.error('[auth] database unavailable while trying credentials login', error);
          throw new Error('AUTH_DB_UNAVAILABLE');
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.userId = user.id;
        token.role = user.role;
      }

      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.userId;
        session.user.role = token.role;
      }

      return session;
    },
  },
};

import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string().min(16),
  NEXTAUTH_URL: z.string().url().optional(),
});

export type EnvSchema = z.infer<typeof envSchema>;

export function validateEnv() {
  return envSchema.safeParse(process.env);
}

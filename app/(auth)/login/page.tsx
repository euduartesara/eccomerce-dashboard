'use client';

import { FormEvent, useMemo, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';


function resolveLoginError(errorCode?: string | null) {
  if (!errorCode) {
    return 'Credenciais inválidas ou usuário inativo.';
  }

  if (errorCode.includes('AUTH_DB_UNAVAILABLE') || errorCode.includes('CallbackRouteError')) {
    return 'Não foi possível conectar ao banco de dados. Verifique se o PostgreSQL está ativo em localhost:5432.';
  }

  return 'Credenciais inválidas ou usuário inativo.';
}

export default function LoginPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = useMemo(() => searchParams.get('callbackUrl') ?? '/dashboard', [searchParams]);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setErrorMessage('');

    const result = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setIsLoading(false);

    if (!result || result.error) {
      setErrorMessage(resolveLoginError(result.error));
      return;
    }

    router.push(result.url ?? callbackUrl);
    router.refresh();
  }

  return (
    <main className="grid min-h-screen place-items-center bg-canvas px-6 py-10">
      <section className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-soft">
        <div className="mb-6 space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Hospicenter</p>
          <h1 className="text-2xl font-semibold text-text">Entrar no painel interno</h1>
          <p className="text-sm text-muted">Use seu e-mail corporativo para acessar.</p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <label className="block space-y-1 text-sm">
            <span className="text-muted">E-mail</span>
            <input
              autoComplete="email"
              className="w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm"
              onChange={(event) => setEmail(event.target.value)}
              required
              type="email"
              value={email}
            />
          </label>

          <label className="block space-y-1 text-sm">
            <span className="text-muted">Senha</span>
            <input
              autoComplete="current-password"
              className="w-full rounded-lg border border-border bg-canvas px-3 py-2 text-sm"
              minLength={6}
              onChange={(event) => setPassword(event.target.value)}
              required
              type="password"
              value={password}
            />
          </label>

          {errorMessage ? (
            <div className="space-y-1">
              <p className="text-sm text-red-600">{errorMessage}</p>
              <p className="text-xs text-muted">Se for o primeiro acesso, confirme se o seed foi executado (npm run prisma:seed).</p>
            </div>
          ) : null}

          <button
            className="w-full rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isLoading}
            type="submit"
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>
      </section>
    </main>
  );
}

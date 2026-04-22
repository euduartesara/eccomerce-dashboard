import { BellDot } from 'lucide-react';

import { LogoutButton } from '@/components/auth/logout-button';
import { getAuthSession } from '@/lib/auth/session';

export async function AppHeader() {
  const session = await getAuthSession();

  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-6">
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted">Painel interno</p>
        <p className="text-sm font-medium text-text">Operação de E-commerce</p>
      </div>

      <div className="flex items-center gap-3">
        <button className="rounded-lg border border-border bg-canvas p-2 text-muted transition hover:text-text" type="button">
          <BellDot className="h-4 w-4" />
        </button>

        <div className="hidden rounded-lg border border-border bg-canvas px-3 py-2 text-right md:block">
          <p className="text-xs font-medium text-text">{session?.user?.name ?? 'Usuário'}</p>
          <p className="text-[11px] uppercase text-muted">{session?.user?.role ?? 'USER'}</p>
        </div>

        <LogoutButton />
      </div>
    </header>
  );
}

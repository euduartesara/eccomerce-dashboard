import Link from 'next/link';
import { ReactNode } from 'react';

const navItems = [
  { href: '/dashboard', label: 'Dashboard' },
  { href: '/tasks', label: 'Tarefas' },
  { href: '/metrics', label: 'Métricas' },
  { href: '/sku', label: 'Registro SKU' },
  { href: '/videos', label: 'Vídeos' },
  { href: '/activities', label: 'Atividades' },
  { href: '/reports', label: 'Relatórios' },
];

type AppShellProps = {
  children: ReactNode;
};

export function AppShell({ children }: AppShellProps) {
  return (
    <div className="flex min-h-screen bg-canvas">
      <aside className="hidden w-64 flex-col border-r border-border bg-surface p-4 lg:flex">
        <div className="px-2 py-4">
          <p className="text-xs font-medium uppercase tracking-wide text-muted">Hospicenter</p>
          <h2 className="mt-1 text-lg font-semibold">E-commerce Ops</h2>
        </div>

        <nav className="mt-4 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-muted transition hover:bg-canvas hover:text-text"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </aside>

      <div className="flex min-h-screen flex-1 flex-col">
        <header className="border-b border-border bg-surface px-6 py-4">
          <p className="text-sm text-muted">Ambiente interno • MVP Etapa 1</p>
        </header>
        <div className="flex-1 p-6">{children}</div>
      </div>
    </div>
  );
}

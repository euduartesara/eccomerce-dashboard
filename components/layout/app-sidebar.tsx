'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BarChart3, CheckSquare, Film, LayoutDashboard, PackageSearch, ReceiptText, Users } from 'lucide-react';

import { cn } from '@/lib/utils/cn';

const navigationItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/tasks', label: 'Tarefas', icon: CheckSquare },
  { href: '/metrics', label: 'Métricas', icon: BarChart3 },
  { href: '/skus', label: 'SKUs', icon: PackageSearch },
  { href: '/videos', label: 'Vídeos', icon: Film },
  { href: '/activities', label: 'Atividades', icon: ReceiptText },
  { href: '/reports', label: 'Relatórios', icon: BarChart3 },
  { href: '/users', label: 'Usuários', icon: Users },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 hidden h-screen w-72 shrink-0 border-r border-border bg-surface p-4 lg:block">
      <div className="rounded-xl border border-border bg-canvas/60 p-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Hospicenter</p>
        <h1 className="mt-2 text-xl font-semibold text-text">E-commerce Workspace</h1>
      </div>

      <nav className="mt-6 space-y-1">
        {navigationItems.map((item) => {
          const isActive = pathname === item.href;
          const Icon = item.icon;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition',
                isActive
                  ? 'bg-primary/10 font-medium text-primary'
                  : 'text-muted hover:bg-canvas hover:text-text',
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

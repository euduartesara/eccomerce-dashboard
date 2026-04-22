import { BellDot, Search } from 'lucide-react';

export function AppHeader() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-border bg-surface px-6">
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-muted">Painel interno</p>
        <p className="text-sm font-medium text-text">Operação de E-commerce</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden items-center gap-2 rounded-lg border border-border bg-canvas px-3 py-2 md:flex">
          <Search className="h-4 w-4 text-muted" />
          <span className="text-sm text-muted">Buscar módulo</span>
        </div>
        <button className="rounded-lg border border-border bg-canvas p-2 text-muted transition hover:text-text" type="button">
          <BellDot className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
}

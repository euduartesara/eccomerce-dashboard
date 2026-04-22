'use client';

import { LogOut } from 'lucide-react';
import { signOut } from 'next-auth/react';

export function LogoutButton() {
  return (
    <button
      className="flex items-center gap-2 rounded-lg border border-border bg-canvas px-3 py-2 text-xs font-medium text-muted transition hover:text-text"
      onClick={() => signOut({ callbackUrl: '/login' })}
      type="button"
    >
      <LogOut className="h-3.5 w-3.5" />
      Sair
    </button>
  );
}

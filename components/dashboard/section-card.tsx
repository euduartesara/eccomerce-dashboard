import { ReactNode } from 'react';

type SectionCardProps = {
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

export function SectionCard({ title, subtitle, action, children }: SectionCardProps) {
  return (
    <section className="rounded-2xl border border-border bg-surface p-5 shadow-soft">
      <header className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-text">{title}</h3>
          {subtitle ? <p className="mt-1 text-sm text-muted">{subtitle}</p> : null}
        </div>
        {action}
      </header>
      {children}
    </section>
  );
}

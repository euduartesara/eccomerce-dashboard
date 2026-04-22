import { ReactNode } from 'react';

type PageContainerProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

export function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <main className="space-y-6 p-6">
      <header className="space-y-2">
        <h2 className="text-2xl font-semibold text-text">{title}</h2>
        {description ? <p className="max-w-3xl text-sm text-muted">{description}</p> : null}
      </header>
      {children}
    </main>
  );
}

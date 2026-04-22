import { Card } from '@/components/ui/card';

const etapaCards = [
  'Bloco de registro rápido de SKU no topo',
  'Resumo de tarefas do dia',
  'Cards de métricas essenciais',
  'Lembretes e atalhos para módulos',
];

export default function DashboardPage() {
  return (
    <main className="space-y-4">
      <header className="rounded-2xl border border-border bg-surface p-6 shadow-soft">
        <h1 className="text-2xl font-semibold">Hospicenter • Dashboard Interno</h1>
        <p className="mt-2 text-sm text-muted">
          MVP iniciado com App Router, TypeScript, Tailwind e arquitetura modular para evolução por etapas.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {etapaCards.map((item) => (
          <Card key={item} title={item} description="Será implementado nas próximas etapas do roadmap." />
        ))}
      </section>
    </main>
  );
}

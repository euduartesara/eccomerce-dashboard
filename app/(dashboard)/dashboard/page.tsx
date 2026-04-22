import { ChannelSummary } from '@/components/dashboard/channel-summary';
import { QuickSkuForm } from '@/components/dashboard/quick-sku-form';
import { ReminderList } from '@/components/dashboard/reminder-list';
import { SectionCard } from '@/components/dashboard/section-card';
import { StatCard } from '@/components/dashboard/stat-card';
import { TaskList } from '@/components/dashboard/task-list';
import { PageContainer } from '@/components/layout/page-container';
import { mockRecentSkus, mockStatCards } from '@/lib/mocks/dashboard';

export default function DashboardPage() {
  return (
    <PageContainer
      title="Dashboard"
      description="Visão geral da operação diária do e-commerce. Dados mockados para validar layout, navegação e hierarquia visual."
    >
      <SectionCard
        title="Registro rápido de SKU"
        subtitle="Bloco fixo para registrar alterações do dia. Nesta etapa o botão salvar apenas dispara um mock handler via console.log."
      >
        <QuickSkuForm />
      </SectionCard>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {mockStatCards.map((stat) => (
          <StatCard key={stat.label} hint={stat.hint} label={stat.label} value={stat.value} />
        ))}
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <SectionCard title="Resumo das tarefas do dia" subtitle="Checklist diário com visual rápido por status e responsável.">
          <TaskList />
        </SectionCard>

        <SectionCard title="Lembretes importantes" subtitle="Prioridades operacionais para o fechamento da semana.">
          <ReminderList />
        </SectionCard>
      </section>

      <section className="grid gap-4 xl:grid-cols-[1.3fr_0.7fr]">
        <SectionCard title="Resumo visual por canal" subtitle="Receita e conversão da semana (mock).">
          <ChannelSummary />
        </SectionCard>

        <SectionCard title="SKUs recentes" subtitle="Últimos registros feitos hoje.">
          <ul className="space-y-2">
            {mockRecentSkus.map((sku) => (
              <li key={sku.id} className="rounded-xl border border-border px-3 py-2">
                <p className="text-sm font-medium text-text">{sku.sku}</p>
                <p className="text-xs text-muted">{sku.productName}</p>
                <p className="mt-1 text-xs text-muted">
                  {sku.type} • {sku.author} • {sku.at}
                </p>
              </li>
            ))}
          </ul>
        </SectionCard>
      </section>
    </PageContainer>
  );
}

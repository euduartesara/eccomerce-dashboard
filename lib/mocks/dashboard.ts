export const mockTasksToday = [
  { id: 't1', title: 'Análise de vendas do dia', time: '09:00', assignee: 'Ana Paula', status: 'DONE', statusLabel: 'Concluída' },
  { id: 't2', title: 'Revisar notas e relacionamento', time: '11:00', assignee: 'Lucas', status: 'IN_PROGRESS', statusLabel: 'Em andamento' },
  { id: 't3', title: 'Correção de categorias prioritárias', time: '14:30', assignee: 'Ana Paula', status: 'PENDING', statusLabel: 'Pendente' },
  { id: 't4', title: 'Revisão final do dia', time: '17:00', assignee: 'Equipe', status: 'PENDING', statusLabel: 'Pendente' },
] as const;

export const mockStatCards = [
  { label: 'Receita da semana', value: 'R$ 186.420,00', hint: '+8,4% vs semana anterior' },
  { label: 'Conversão média', value: '2,74%', hint: 'Média dos 3 canais' },
  { label: 'SKUs alterados hoje', value: '38', hint: 'Última atualização às 16:40' },
  { label: 'Vídeos pendentes', value: '12', hint: '4 com prioridade alta' },
] as const;

export const mockReminders = [
  { id: 'r1', title: 'Preencher métricas da semana', description: 'Prazo interno: toda segunda-feira até 10h.' },
  { id: 'r2', title: 'Revisar tarefas pendentes', description: 'Validar itens não concluídos antes do fechamento diário.' },
  { id: 'r3', title: 'Organizar lista de vídeos', description: 'Priorizar produtos com maior impacto em conversão.' },
] as const;

export const mockChannelSummary = [
  { channel: 'Hospicenter', revenue: 'R$ 98.300,00', conversion: '3,10%', status: 'Acima da meta' },
  { channel: 'Vias Aéreas', revenue: 'R$ 34.890,00', conversion: '2,05%', status: 'Estável' },
  { channel: 'Mercado Livre', revenue: 'R$ 53.230,00', conversion: '2,98%', status: 'Atenção em catálogo' },
] as const;

export const mockRecentSkus = [
  { id: 's1', sku: 'HSP-10001', productName: 'Oxímetro Portátil Y', type: 'Alterado', author: 'Ana Paula', at: '10:12' },
  { id: 's2', sku: 'HSP-10002', productName: 'Nebulizador Compacto Z', type: 'Novo cadastrado', author: 'Lucas', at: '11:48' },
  { id: 's3', sku: 'HSP-10003', productName: 'Monitor Multiparamétrico A', type: 'Alterado', author: 'Ana Paula', at: '15:05' },
] as const;

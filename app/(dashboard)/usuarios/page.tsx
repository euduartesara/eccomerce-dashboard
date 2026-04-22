import { PageContainer } from '@/components/layout/page-container';
import { requireAdmin } from '@/lib/auth/session';

export default async function UsuariosPage() {
  await requireAdmin();

  return <PageContainer title="Usuários" description="Área restrita para administração de usuários (somente admin)." />;
}

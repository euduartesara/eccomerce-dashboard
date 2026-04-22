# Etapa 1 — Base arquitetural e esqueleto inicial

## Estrutura de pastas proposta

```txt
app/
  (auth)/login/
  (dashboard)/dashboard/
  api/health/
components/
  layout/
  ui/
lib/
  auth/
  db/
  permissions/
  schemas/
  services/
  utils/
prisma/
types/
docs/
```

## Arquitetura

- **Presentation Layer (app/components):** páginas, layouts, componentes reutilizáveis e composição de UI.
- **Application Layer (lib/services):** casos de uso e regras de negócio por módulo.
- **Infrastructure Layer (lib/db, prisma, app/api):** acesso ao banco, rotas internas e integrações futuras.
- **Cross-cutting (lib/schemas, lib/permissions, lib/auth):** validação, autorização e identidade.

## Estratégia de evolução

1. Manter páginas como **Server Components** por padrão.
2. Criar **Client Components** apenas para formulários, gráficos e interações ricas.
3. Concentrar validações com **Zod**.
4. Usar Prisma como fonte única de contratos de dados.

## Dependências-chave

- `next`, `react`, `react-dom`, `typescript`
- `tailwindcss`, `postcss`, `autoprefixer`
- `prisma`, `@prisma/client`, `tsx`
- `next-auth`, `bcryptjs`
- `zod`, `react-hook-form`, `@hookform/resolvers`
- `@tanstack/react-query`, `recharts`, `date-fns`, `lucide-react`, `clsx`


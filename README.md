# Hospicenter E-commerce Dashboard

MVP em **Next.js + TypeScript + Tailwind + Prisma + PostgreSQL + NextAuth (Credentials)** para gestão interna do fluxo de trabalho de e-commerce.

## Como rodar localmente

1. Instale dependências:

```bash
npm install
```

2. Copie variáveis:

```bash
cp .env.example .env
```

3. Rode migrations e seed:

```bash
npm run prisma:migrate
npm run prisma:seed
```

4. Inicie o servidor:

```bash
npm run dev
```

Acesse em `http://localhost:3000`.

## Variáveis de ambiente

```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/hospicenter_dashboard?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="change-this-secret-with-at-least-16-chars"
```

## Usuários seed para login

- **Admin**: `admin@hospicenter.local` / `Admin@123456`
- **User 1**: `analista1@hospicenter.local` / `User@123456`
- **User 2**: `analista2@hospicenter.local` / `User@123456`

## Regras de acesso (Etapa 4)

- Não autenticado: redireciona para `/login`.
- `ADMIN`: acesso completo.
- `USER`: acesso a módulos operacionais.
- `/usuarios`: acesso exclusivo de `ADMIN`; `USER` é redirecionado para `/dashboard`.

## Estrutura

Consulte `docs/etapa-1.md` para visão de arquitetura base.

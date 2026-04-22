# Hospicenter E-commerce Dashboard

MVP inicial em **Next.js + TypeScript + Tailwind + Prisma + PostgreSQL** para gestão interna do fluxo de trabalho de e-commerce.

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

## Estrutura

Consulte `docs/etapa-1.md` para visão de arquitetura e organização de pastas.

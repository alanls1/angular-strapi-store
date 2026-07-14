# 🛒 Loja Angular + Strapi

![Angular](https://img.shields.io/badge/Angular-DD0031?logo=angular&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![SSR](https://img.shields.io/badge/Rendering-SSR_(Angular_Universal)-informational)
![Strapi](https://img.shields.io/badge/Backend-Strapi-4945FF?logo=strapi&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-informational)

Aplicação de loja virtual desenvolvida com **Angular** (com **Server-Side Rendering via Angular Universal**) no frontend e **Strapi** no backend (headless CMS). O objetivo principal é praticar e consolidar conhecimentos em Angular avançado — componentes standalone, SSR e integração com um backend headless — além de servir como base para uma loja completa.

## 🚀 Tecnologias Utilizadas

### Frontend
- [Angular](https://angular.io/) com componentes standalone
- **Angular Universal (SSR)** — renderização no servidor via `main.server.ts`
- [TypeScript](https://www.typescriptlang.org/)
- [RxJS](https://rxjs.dev/)
- [Angular Material](https://material.angular.io/) + [SCSS](https://sass-lang.com/)

### Backend
- [Strapi](https://strapi.io/) (headless CMS) — repositório separado, precisa estar rodando para a loja exibir dados
- [SQLite](https://www.sqlite.org/) como banco local do Strapi

### Testes
- Jasmine + Karma (padrão do Angular CLI)

## ⚙️ Pré-requisitos

Este frontend depende de uma instância do **Strapi** rodando e servindo o conteúdo (categorias, tags, produtos). Configure a URL da API em `src/environments/environment.ts` apontando para o Strapi local ou remoto antes de rodar a aplicação.

## 📦 Rodando localmente

```bash
git clone https://github.com/alanls1/angular-strapi-store.git
cd angular-strapi-store
npm install
npm start        # ng serve — http://localhost:4200
npm run test      # testes unitários (Karma)
npm run build     # build de produção (client + server, para SSR)
```

## 🧱 Estrutura

```
src/app/
  features/   # seções de página (hero, header, footer, categories...)
  shared/     # componentes reutilizáveis (button, card)
  services/   # acesso à API do Strapi (categories, clothes, tags)
```

## 🛠 Funcionalidades

- [x] Integração com Strapi via API REST
- [x] Listagem das categorias
- [x] Listagem das tags
- [ ] Listagem de produtos ligada à interface (em desenvolvimento)

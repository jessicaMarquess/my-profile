# Portfólio de Jessica Marques

Portfólio pessoal com projetos selecionados, trajetória profissional, perfil pessoal e formas de contato. Implementado com **Astro 7, TypeScript e Tailwind CSS 3**.

As páginas são geradas como HTML estático. O JavaScript no navegador atende o tema claro/escuro, menu mobile, navegação ativa e easter eggs do Pingo e do Jason; não há hidratação React. As animações usam CSS e respeitam a preferência de movimento reduzido.

## Desenvolvimento

Requisitos: Node.js **26.13.0 LTS (linha 26)** e npm **9.6.5 ou superior**.

```bash
nvm install
nvm use
npm ci
npm run dev
```

A versão do Node está fixada no `.nvmrc`; os comandos `nvm` pressupõem que ele esteja instalado.

O terminal informa a URL local (por padrão, `http://localhost:4321`).

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run check` | Verificação de tipos e templates Astro |
| `npm run lint` | ESLint sem warnings |
| `npm run build` | Verificação de tipos e geração do site em `dist/` |
| `npm run preview` | Prévia local do build |
| `npm test` | Testes estáticos; requer build atualizado |

Execute `npm run build && npm test` para verificar o HTML gerado, os arquivos públicos e o sitemap. A suíte usa o runner nativo do Node; menu e easter egg também precisam ser conferidos por teclado no navegador.

## Organização

- `src/pages/`: Home, perfis profissional e pessoal, além da página 404.
- `src/layouts/Layout.astro`: estrutura HTML, metadados e aplicação inicial do tema.
- `src/components/`: componentes compartilhados e controle de tema.
- `src/index.css`: estilos globais e padrões compartilhados.
- `src/styles/`: tokens semânticos e fontes locais.
- `src/data/`: projetos, experiências e tecnologias.
- `src/scripts/`: menu e easter egg acessível.
- `public/`: imagens, PDFs e ícones públicos.

O domínio público fica em `astro.config.mjs`. A configuração da Vercel gera e publica `dist/`, com URLs sem extensão e sem o antigo rewrite de SPA. Em outras hospedagens, configure o atendimento das rotas estáticas e o uso de `404.html` para páginas inexistentes.

## Colaboração

Leia [AGENTS.md](./AGENTS.md) para convenções e validações e [PRODUCT.md](./PRODUCT.md) para contexto do produto. O [CLAUDE.md](./CLAUDE.md) importa o mesmo guia de agentes.

Feito por [Jessica Marques](https://github.com/jessicaMarquess) 🖤

## Identidade e assets

Dark Mode: Unlocked combina roxo/lavanda, iluminação quente e pixel art na ilustração. O tema escuro é padrão; o claro continua disponível. Cores, fontes, espaçamentos, raios e durações ficam em `src/styles/tokens.css` e alimentam também o Tailwind 3.

A procedência das imagens e fontes está em [public/ASSETS.md](./public/ASSETS.md). Os cards aceitam screenshots reais e demos opcionais; os quatro projetos selecionados ainda não têm screenshots fornecidos. Não são usadas imagens de outros projetos para simulá-los.

## Validação do redesenho

Build com verificação de tipos, ESLint e testes de HTML/sitemap executados. Conferidos na prévia: rotas, 404, PDFs, menu com Enter/Escape, conquista com Espaço, preferência salva, armazenamento bloqueado e redução de movimento; layouts desktop e mobile (320 e 390 px) sem overflow horizontal.

Axe-core executado na Home nos temas claro e escuro sem violações automáticas detectadas após a troca de tema estabilizar. Alguns contrastes sobre a ilustração exigem avaliação manual. Não foi executado Lighthouse; isso não representa certificação WCAG nem medição de Core Web Vitals.

O encontro secreto do Jason fica na patinha “Quem está aí?” no Save Point. Abre um diálogo não modal, com Escape e retorno de foco. Dar um petisco troca a pose e anuncia a conquista; no mobile o painel entra abaixo dos contatos. Interação conferida por teclado, movimento reduzido e axe-core sem violações automáticas detectadas com o painel aberto.

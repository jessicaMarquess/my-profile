# Guia do projeto para agentes e colaboradores

Este arquivo reúne as instruções compartilhadas do repositório. Mantenha-o atualizado quando houver mudanças de estrutura, comandos ou convenções. O `CLAUDE.md` importa este guia; concentre as instruções aqui para evitar divergências.

## Contexto e produto

- Portfólio pessoal de Jessica Marques, voltado a recrutadores e potenciais clientes de projetos web.
- Apresenta trajetória profissional, projetos selecionados, redes sociais, contato e currículo.
- Formação confirmada pela Jessica: Pós Tech em Full Stack Development pela FIAP concluída. Não apresentar como curso em andamento nem inventar uma data de conclusão.
- Leia [PRODUCT.md](./PRODUCT.md) antes de alterar conteúdo, posicionamento ou experiência visual. Ele documenta o público, a marca, as evidências disponíveis e os princípios do produto.
- Conteúdo e comunicação em português brasileiro, com tom claro, técnico e humano.
- Não invente métricas, experiências, responsabilidades ou informações sobre projetos. Não exponha informações confidenciais de trabalhos profissionais ou privados.

## Stack

- Astro 7 com geração estática de HTML e TypeScript em modo estrito.
- Rotas por arquivos em `src/pages/`, sem hidratação de framework. Menu, navegação ativa, tema e easter egg usam scripts TypeScript pequenos. React só deve voltar se houver complexidade que justifique seu custo.
- Tailwind CSS 3 via PostCSS e CSS convencional para estilos.
- Animações CSS; ícones Tabler SVG importados no build e renderizados por `Icon.astro`, sem biblioteca de ícones no navegador.
- ESLint 8 com `eslint-plugin-astro`; `astro check` para verificar tipos e templates.
- Node.js 26.13.0 LTS (linha 26) e npm >= 9.6.5, conforme `package.json`. Use `nvm install` e `nvm use` para seguir o `.nvmrc`.
- npm, com `package-lock.json` versionado. Preserve o gerenciador e atualize o lockfile ao alterar dependências.

## Comandos

Execute na raiz do repositório:

| Comando | Finalidade |
| --- | --- |
| `npm ci` | Instalar as dependências conforme o lockfile |
| `npm run dev` | Iniciar o servidor local do Astro |
| `npm run check` | Validar TypeScript e templates Astro |
| `npm run build` | Executar `astro check` e gerar o site estático em `dist/` |
| `npm run lint` | Executar ESLint, sem permitir warnings |
| `npm run preview` | Servir o build localmente; execute o build antes |

Execute `npm test` após o build para verificar o HTML estático, as rotas e os arquivos públicos.

## Estrutura e pontos de entrada

| Caminho | Responsabilidade |
| --- | --- |
| `astro.config.mjs` | URL pública do site e geração estática |
| `src/layouts/Layout.astro` | Documento HTML, metadados por página, tema inicial, header e footer |
| `src/pages/index.astro` | Home; composição de projetos, experiência e contato |
| `src/pages/perfil-profissional.astro` | Perfil profissional |
| `src/pages/perfil-pessoal.astro` | Perfil pessoal |
| `src/pages/404.astro` | Página de erro com `noindex` |
| `src/components/` | Header, Footer, ThemeToggle e Icon em Astro |
| `src/components/ThemeToggle.astro` | Alternância de tema, persistência e sincronização com sistema e outras abas |
| `src/styles/tokens.css` | Fonte de verdade para cores, fontes, espaçamentos, raios, sombras e durações |
| `src/styles/fonts.css` | Fontes locais WOFF2, subconjuntos latinos e font-display swap |
| `src/components/Hero.astro` | Hero com ilustração, contatos, resumo e easter egg |
| `src/components/About.astro` | Apresentação e Character Profile |
| `src/components/Experience.astro` | Experiência e habilidades em seções estáticas |
| `src/components/Contact.astro` | Contato com referência visual a Save Point |
| `src/components/ProjectCard.astro` | Projeto tipado; screenshot e demonstração opcionais |
| `src/components/Pinscher.astro` | Controle acessível de interação com o Pingo |
| `src/scripts/navigation.ts` | Menu mobile com Escape e seção ativa via IntersectionObserver |
| `src/scripts/security.ts` | Eventos de foco, hover e ativação da conquista |
| `src/data/profile.ts` | Experiências e tecnologias compartilhadas |
| `tests/static-site.test.mjs` | Regressões de conteúdo, arquivos públicos, páginas estáticas e sitemap |
| `src/pages/sitemap.xml.ts` e `robots.txt.ts` | Sitemap e robots gerados usando o domínio de astro.config.mjs |
| `src/data/projects.ts` | Conteúdo dos projetos selecionados |
| `src/index.css` | Estilos globais, layout, tipografia, responsividade e animações |
| `public/` | Imagens, ícones e PDFs, incluindo os currículos disponibilizados |
| `tailwind.config.js` | Configuração do Tailwind, fontes e modo escuro por classe |
| `postcss.config.js` | Pipeline CSS com Tailwind e Autoprefixer |
| `vercel.json` | Build Astro, saída `dist/` e URLs sem extensão |

Rotas atuais: `/`, `/perfil-profissional`, `/perfil-pessoal`. O Astro gera `404.html` para rotas não encontradas. O servidor de hospedagem deve respeitar os arquivos estáticos e o status 404; não adicione rewrite de SPA para `index.html`.

## Convenções de implementação

- Priorize componentes `.astro` para conteúdo estático e scripts pequenos para interações. Não adicione um framework de UI sem necessidade para a tarefa.
- Use TypeScript tipado no frontmatter e nos scripts processados. Evite `any` e supressões de erros sem justificativa.
- Respeite os padrões do arquivo editado: aspas simples e ausência de ponto e vírgula no TypeScript; atributos HTML usam `class`, sem convenções JSX como `className` ou `key`.
- Use imports relativos; não há alias de caminhos configurado.
- Reaproveite componentes, bibliotecas e estilos existentes antes de adicionar dependências ou abstrações.
- CSS global contém reset, layout e padrões compartilhados; estilos específicos ficam encapsulados nos componentes Astro. Tailwind 3 usa as mesmas CSS Custom Properties. Não duplique valores de cor/fonte nos componentes; altere `tokens.css` para mudar a identidade.
- O modo escuro é o padrão visual. O tema usa a classe `dark` em `<html>` e a chave `theme` do `localStorage`. O script inline do layout aplica a preferência antes da pintura; `ThemeToggle.astro` controla as interações. Preserve o funcionamento mesmo quando o armazenamento estiver bloqueado.
- Preserve os links internos da Home (`#inicio`, `#sobre`, `#projetos`, `#experiencia`, `#skills`, `#contato`) e o destino do link de pular para o conteúdo (`#conteudo`). Nas páginas internas, os links do header apontam para as seções da Home.
- Preserve os caminhos públicos de imagens e currículo, ou atualize suas referências ao movê-los.
- Use o layout compartilhado e defina títulos adequados para páginas novas. A URL canônica usa o caminho atual e o domínio de `astro.config.mjs`.
- O conteúdo deve continuar legível sem JavaScript. Animações devem ser feitas em CSS e respeitar movimento reduzido.
- Não adicione funcionalidades, refatorações abrangentes ou mudanças de dependências fora do escopo solicitado.

## Acessibilidade e validação

- Preserve HTML semântico, navegação por teclado, foco visível, nomes acessíveis e textos alternativos relevantes.
- Mantenha contraste WCAG AA, responsividade e respeito a `prefers-reduced-motion`, inclusive em animações controladas por JavaScript.
- Para mudanças de código, execute `npm run lint` e `npm run build`. Se houver falhas anteriores à alteração, diferencie-as dos problemas introduzidos.
- Para mudanças visuais, confira desktop e mobile, temas claro e escuro e interações afetadas. Ao alterar navegação, confira as rotas e o acesso direto a elas.
- Para mudanças somente de documentação, revise conteúdo, caminhos, comandos e diff; não é necessário rodar o build.
- Informe o que foi alterado, quais verificações foram executadas e quaisquer limitações. Nunca invente resultados de validação.

## Colaboração

- Converse em português brasileiro, de forma próxima, direta e colaborativa. Humor natural é bem-vindo, sem prejudicar a precisão técnica.
- Evite explicar conceitos básicos sem necessidade; discuta decisões e alternativas quando elas afetarem a solução.
- Preserve alterações existentes da usuária e mantenha o trabalho dentro do escopo solicitado.
- Este guia deve funcionar em qualquer máquina: não dependa de caminhos pessoais, configurações locais de agentes ou credenciais.

## Assets e interações

- `public/developers-sanctuary.webp`: ilustração original gerada para a hero; nunca representa uma fotografia da Jessica ou um screenshot de projeto.
- Fontes e licenças em `public/fonts/`; procedência em `public/ASSETS.md`. Não volte a depender de Google Fonts em tempo de execução.
- Screenshots reais dos projetos selecionados ainda não foram fornecidos. `Project.image` aceita src, alt, width e height; `demo` é opcional. Não invente os assets ou os links.
- O menu é um disclosure, sem captura de foco. Funciona sem JavaScript com os links visíveis; com script, fecha ao navegar e com Escape, devolvendo o foco ao botão.
- A imagem do Pingo permanece visível sem JavaScript; o botão de conquista aparece somente quando seus eventos estão registrados. Use botão nativo, teclado, aria-live e anúncios em inglês marcados com lang=en.
- Antes de entregar mudanças interativas, confira teclado, mobile, redução de movimento, tema claro/escuro e bloqueio de localStorage no navegador. Os testes estáticos não substituem essa validação.

## Encontro secreto do Jason

- `src/components/Jason.astro`, inserido em Contact.astro, usa dialog não modal. Desktop: canto inferior direito; mobile: fluxo normal abaixo dos contatos.
- `src/scripts/jason.ts`: patinha abre/fecha, Escape fecha, foco retorna ao gatilho; petisco troca pose e anuncia a conquista em aria-live. A conquista fica preservada ao reabrir durante a mesma visita à página.
- `public/jason-sprites.webp`: duas poses lado a lado, 1024 × 512 px com transparência. Cada frame é quadrado; CSS desloca a imagem em 50%, sem bibliotecas ou hidratação de framework.
- Gatilho fica oculto sem JS; nenhum contato depende do easter egg. Não abrir automaticamente nem adicionar som.

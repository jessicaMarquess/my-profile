export interface Project {
  name: string
  kind: string
  description: string
  details: string
  stack: string
  url: string
  demo?: string
  image?: { src: string; alt: string; width: number; height: number }
}

export const projects: Project[] = [
  {
    name: 'Balcão',
    kind: 'Produto desktop',
    description:
      'PDV offline para loja de eletrônicos, criado para substituir o controle manual por planilhas.',
    details:
      'Vendas, estoque, relatórios, lista de compras e exportação em PDF em uma aplicação desktop.',
    stack: 'Electron · React · TypeScript · SQLite · Tailwind',
    url: 'https://github.com/jessicaMarquess/balcao',
  },
  {
    name: 'Ajudaé',
    kind: 'Aplicação mobile + API',
    description:
      'Plataforma educacional com autenticação, posts e área administrativa para professores e estudantes.',
    details:
      'Integração entre aplicativo Expo/React Native e API NestJS com autenticação baseada em tokens.',
    stack: 'React Native · Expo · NestJS · TypeORM · MySQL',
    url: 'https://github.com/jessicaMarquess/ajudae-mobile',
  },
  {
    name: 'Pixel Hub',
    kind: 'Liderança técnica',
    description:
      'Base técnica criada para acelerar o desenvolvimento de landing pages e produtos do coletivo.',
    details:
      'Autoria do boilerplate Astro, backend, deploys, organização do time e revisão das entregas.',
    stack: 'Astro · NestJS · Prisma · PostgreSQL · Deploy',
    url: 'https://github.com/pixel-hub-org',
  },
  {
    name: 'Bookquest',
    kind: 'Produto pessoal',
    description:
      'Plataforma de acompanhamento de leituras que transforma progresso em uma experiência gamificada.',
    details:
      'Um laboratório de produto para explorar estados, regras e experiência do usuário.',
    stack: 'TypeScript · Produto · Gamificação',
    url: 'https://github.com/jessicaMarquess/bookquest',
  },
]

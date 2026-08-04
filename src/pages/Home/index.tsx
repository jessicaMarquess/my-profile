import { ArrowDownTrayIcon, ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { useSpring, animated } from 'react-spring'
import profileImage from '../../../public/profile-github.jpg'

const projects = [
  {
    name: 'Balcão',
    kind: 'Produto desktop',
    description:
      'PDV offline para loja de eletrônicos, criado para substituir o controle manual por planilhas.',
    details:
      'Vendas, estoque, relatórios, lista de compras e exportação em PDF em uma aplicação desktop.',
    stack: 'Electron · React · TypeScript · SQLite · Tailwind',
    url: 'https://github.com/jessicaMarquess/balcao',
    tone: 'project-card--blue',
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
    tone: 'project-card--orange',
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
    tone: 'project-card--lilac',
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
    tone: 'project-card--green',
  },
]

const capabilities = [
  'Interfaces de produto com React e TypeScript',
  'Design Systems, Storybook e testes automatizados',
  'APIs e regras de negócio com Node.js e NestJS',
  'Integrações REST, bancos relacionais e NoSQL',
]

export const Home = () => {
  const hero = useSpring({
    from: { opacity: 0, transform: 'translate3d(0, 24px, 0)' },
    to: { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    config: { tension: 190, friction: 26 },
  })

  return (
    <main id="conteudo" className="portfolio-shell">
      <animated.section style={hero} className="portfolio-hero">
        <div className="hero-copy">
          <p className="hero-intro">Jessica Marques</p>
          <h1>
            Produtos digitais sólidos, da interface à arquitetura.
          </h1>
          <p className="hero-summary">
            Desenvolvedora Full Stack Pleno com foco em front-end, Design
            Systems e arquitetura de aplicações. Transformo necessidades de
            negócio em produtos claros, consistentes e sustentáveis.
          </p>
          <div className="hero-actions">
            <a className="button button--primary" href="#projetos">
              Ver projetos <ArrowUpRightIcon aria-hidden="true" />
            </a>
            <a
              className="button button--secondary"
              href="/curriculo-jessica-marques.pdf"
              download
            >
              Baixar currículo <ArrowDownTrayIcon aria-hidden="true" />
            </a>
          </div>
        </div>

        <aside className="hero-profile" aria-label="Resumo profissional">
          <img src={profileImage} alt="Jessica Marques" />
          <div>
            <p>Atuação desde 2021</p>
            <strong>Full Stack Pleno</strong>
            <span>FIAP · Pós Tech em Full Stack Development</span>
          </div>
        </aside>
      </animated.section>

      <section id="projetos" className="portfolio-section portfolio-section--projects">
        <div className="section-heading">
          <h2>Projetos que mostram como eu trabalho.</h2>
          <p>
            Cases selecionados por contexto, responsabilidade e decisões de
            engenharia — não apenas por tecnologia usada.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.tone}`} key={project.name}>
              <div className="project-card__topline">
                <span>{project.kind}</span>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Abrir ${project.name} no GitHub`}
                >
                  <ArrowUpRightIcon aria-hidden="true" />
                </a>
              </div>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <p className="project-card__detail">{project.details}</p>
              <span className="project-card__stack">{project.stack}</span>
            </article>
          ))}
        </div>
      </section>

      <section id="experiencia" className="portfolio-section experience-section">
        <div className="section-heading">
          <h2>Profundidade técnica que acompanha o produto.</h2>
          <p>
            Na Serena Energia, atuo desde 2021 e, desde 2023, como
            desenvolvedora full stack pleno.
          </p>
        </div>

        <div className="experience-layout">
          <div className="experience-statement">
            <p>
              Meu trabalho combina evolução de interfaces, padrões técnicos,
              integrações e decisões de arquitetura. Também participo de
              iniciativas internas que apoiam visibilidade dos dados de
              engenharia e qualidade de entrega.
            </p>
            <a
              className="text-link"
              href="https://www.linkedin.com/in/jessica-maria-marques/"
              target="_blank"
              rel="noreferrer"
            >
              Conhecer trajetória no LinkedIn <ArrowUpRightIcon aria-hidden="true" />
            </a>
          </div>
          <ul className="capability-list">
            {capabilities.map((capability) => (
              <li key={capability}>{capability}</li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="contact-section">
        <p>Vamos conversar?</p>
        <h2>
          Aberta a oportunidades full time e a projetos que pedem uma visão
          completa de produto.
        </h2>
        <div className="contact-actions">
          <a className="button button--light" href="mailto:jessica.marques.dev@gmail.com">
            Enviar e-mail <ArrowUpRightIcon aria-hidden="true" />
          </a>
          <a
            className="button button--outline-light"
            href="https://github.com/jessicaMarquess"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <ArrowUpRightIcon aria-hidden="true" />
          </a>
        </div>
      </section>
    </main>
  )
}

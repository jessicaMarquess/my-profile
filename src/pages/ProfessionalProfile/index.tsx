import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import imgProfile from '../../../public/my-profile.webp'
import { useSpring, animated } from 'react-spring'
import './style.css'
import { useState } from 'react'

const DOWNLOAD_LINK = '/CV___versão_ptbr-1.pdf'
const DOWNLOAD_TEXT = 'Baixar meu currículo'

export const ProfessionalProfile = () => {
  const styles = useSpring({
    from: { opacity: 0, transform: 'translateX(-800px)' },
    to: { opacity: 1, transform: 'translateX(0)' },
    config: { mass: 1, tension: 200, friction: 80 },
  })

  const [isImageLoaded, setIsImageLoaded] = useState(false)

  return (
    <section className="rounded-lg mx-auto flex flex-col justify-center items-center max-w-[1090px]">
      <animated.h1
        style={styles}
        className="text-purple-500 text-4xl self-start font-roboto-mono ml-4 lg:ml-0 mt-2 lg:mt-10"
      >
        Perfil Profissional
      </animated.h1>
      <a
        className="ml-4 mt-3 lg:mt-0 inline-flex sm:hidden items-center text-purple-500 font-roboto-mono cursor-pointer hover:underline self-start lg:ml-[200px]"
        href={DOWNLOAD_LINK}
        download="CV___versão_ptbr.pdf"
      >
        <ArrowDownTrayIcon
          className="text-purple-500 mr-2"
          width={16}
          height={16}
        />
        {DOWNLOAD_TEXT}
      </a>
      <div className="mt-5 p-4 flex " role="status">
        {!isImageLoaded && (
          <div className="w-full animate-pulse" role="status">
            <svg
              className="hidden sm:inline w-40 h-40 mr-3 text-gray-200 dark:text-gray-700"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          </div>
        )}
        <img
          src={imgProfile}
          alt="Uma foto linda minha."
          className="hidden sm:inline w-40 h-40 rounded-full border-4 border-purple-400 mr-6"
          loading="lazy"
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="dark:text-slate-300 text-slate-700 pt-2 sm:mr-20 lg:mr-0">
          <p>
            Desde minha infância, sempre nutri um fascínio pela tecnologia, o
            que me levou a escolher uma formação na área e, consequentemente, a
            ingressar no mercado de trabalho. Tenho uma afinidade particular com
            o estudo constante, e a curiosidade sempre desempenhou um papel
            fundamental em minha trajetória. Conto com projetos em meu
            repositório no GitHub, incluindo sites simples e outros trabalhos.
            Atuo profissionalmente desde setembro de 2021, período em que pude
            aprimorar significativamente minhas habilidades técnicas e
            interpessoais. A cada dia, minha paixão pela área cresce, e almejo
            me especializar ainda mais no desenvolvimento front-end.
            <br />
            Em minha posição como desenvolvedora júnior, trabalho diariamente
            com tecnologias como ReactJS, TailwindCSS, Material UI, JavaScript,
            NodeJS, NestJS, TypeORM, Testes Automatizados, Postgresql e aplico
            metodologias ágeis, destacando-se o Kanban. Contribuí ativamente na
            criação do Design System da empresa, adquirindo conhecimentos em
            Design Atômico, Storybook, Testes Automatizados no FrontEnd, além de
            avançados materiais relacionados ao ReactJS. Possuo um sólido
            domínio da ferramenta Figma, onde utilizo muito no meu dia a dia.
          </p>
        </div>
      </div>
      <a
        className="hidden sm:inline-flex items-center text-purple-500 font-roboto-mono cursor-pointer hover:underline self-start sm:ml-[200px]"
        href={DOWNLOAD_LINK}
        download="CV___versão_ptbr.pdf"
      >
        <ArrowDownTrayIcon
          className="text-purple-500 mr-2"
          width={16}
          height={16}
        />
        {DOWNLOAD_TEXT}
      </a>
    </section>
  )
}

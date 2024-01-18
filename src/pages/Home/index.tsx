import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Welcome from '../../components/Welcome'
import SocialMedias from '../../components/SocialMedias'
import React from 'react'

interface ThemeHomeProps {
  theme: string
}

export const Home: React.FC<ThemeHomeProps> = ({ theme }) => {
  return (
    <>
      <Welcome theme={String(theme)} />
      <SocialMedias theme={String(theme)} />
      <section className="flex justify-center">
        <div className="mx-4 sm:w-[67.5rem] sm:flex flex-col mt-10">
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl">
            Sobre a Jessica{' '}
            <span className="text-xs italic hidden sm:inline">
              (sim, estou falando em terceira pessoa)
            </span>
          </h1>
          <div className="flex gap-x-10 mt-3 sm:mt-0">
            <a
              className="inline-flex items-center text-purple-400 font-roboto-mono cursor-pointer  hover:underline"
              href="/perfil-pessoal"
            >
              Perfil Pessoal
              <ArrowUpRightIcon
                className="ml-1 hidden sm:inline"
                width={16}
                height={16}
              />
            </a>
            <a
              className="inline-flex items-center text-purple-400 font-roboto-mono cursor-pointer  hover:underline"
              href="/perfil-profissional"
            >
              Perfil Profissional
              <ArrowUpRightIcon
                className="hidden sm:inline ml-1"
                width={16}
                height={16}
              />
            </a>
          </div>
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl mt-10">
            Projetos
          </h1>
          <p className="text-slate-700 dark:text-slate-300">
            Aqui ficarão os projetos
          </p>
        </div>
      </section>
    </>
  )
}

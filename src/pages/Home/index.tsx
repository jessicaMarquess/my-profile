import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import Welcome from '../../components/Welcome'
import React from 'react'
import ProjectsCard from './components/ProjectsCard'
import imgCoffeeDelivery from '../../../public/coffee-delivery.png'
import imgNotas from '../../../public/notas.png'
import imgToDo from '../../../public/todo.png'
import imgConversorMoedas from '../../../public/conversor.png'

interface ThemeHomeProps {
  theme: string
}

export const Home: React.FC<ThemeHomeProps> = ({ theme }) => {
  return (
    <>
      <Welcome theme={String(theme)} />
      <section className="flex mx-2 lg:justify-center lg:mx-0">
        <div className="lg:mx-4 lg:w-[67.5rem] flex flex-col mt-4">
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl">
            Sobre a Jessica{' '}
            <span className="text-xs italic hidden lg:inline">
              (sim, estou falando em terceira pessoa)
            </span>
          </h1>
          <div className="flex gap-x-4 md:gap-x-10 lg:mt-3 mt-0">
            <a
              className="inline-flex items-center text-purple-500 font-roboto-mono cursor-pointer  hover:underline"
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
              className="inline-flex items-center text-purple-500 font-roboto-mono cursor-pointer  hover:underline"
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
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl mt-6">
            Projetos{' '}
            <span className="text-xs italic hidden lg:inline">
              (acesse meu reposítório no github para mais 😊)
            </span>
          </h1>

          <div className="grid justify-center sm:justify-normal	 sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:flex lg:gap-x-6">
            <ProjectsCard
              title="Coffee Delivery"
              link="https://coffee-delivery-gamma-ivory.vercel.app/"
              img={imgCoffeeDelivery}
            />

            <ProjectsCard
              title="Notas"
              link="https://notes-theta-sable.vercel.app/"
              img={imgNotas}
            />

            <ProjectsCard
              title="To Do"
              link="https://challenge-01-todo.vercel.app/"
              img={imgToDo}
            />

            <ProjectsCard
              title="Conversor"
              link="https://conversor-moedas-zeta.vercel.app/"
              img={imgConversorMoedas}
            />
          </div>
        </div>
      </section>
    </>
  )
}

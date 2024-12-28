import Welcome from '../../components/Welcome'
import React from 'react'
// import ProjectsCard, { ProjectsCardProps } from './components/ProjectsCard'
// import imgCoffeeDelivery from '../../../public/coffee-delivery.png'
// import imgNotas from '../../../public/notas.png'
// import imgToDo from '../../../public/todo.png'
// import imgConversorMoedas from '../../../public/conversor.png'
import ProfileLink from './components/ProfileLink'

interface ThemeHomeProps {
  theme: string
}

export const Home: React.FC<ThemeHomeProps> = ({ theme }) => {
  // const arrayProjectCards: ProjectsCardProps[] = [
  //   {
  //     title: 'Coffee Delivery',
  //     link: 'https://coffee-delivery-gamma-ivory.vercel.app/',
  //     img: imgCoffeeDelivery,
  //   },
  //   {
  //     title: 'Notas',
  //     link: 'https://notes-theta-sable.vercel.app/',
  //     img: imgNotas,
  //   },
  //   {
  //     title: 'To Do',
  //     link: 'https://challenge-01-todo.vercel.app/',
  //     img: imgToDo,
  //   },
  //   {
  //     title: 'Conversor',
  //     link: 'https://conversor-moedas-zeta.vercel.app/',
  //     img: imgConversorMoedas,
  //   },
  // ]

  return (
    <>
      <Welcome theme={String(theme)} />
      <section className="flex mx-2 lg:justify-center lg:mx-0">
        <div className="lg:mx-4 lg:w-[67.5rem] flex flex-col mt-4">
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl">
            Sobre mim
          </h1>
          <div className="flex gap-x-4 md:gap-x-10 lg:mt-3 mt-0">
            <ProfileLink title="Perfil Pessoal" href="/perfil-pessoal" />
            <ProfileLink
              title="Perfil Profissional"
              href="/perfil-profissional"
            />
          </div>
          <h1 className="text-slate-700 dark:text-slate-300 font-roboto-mono text-3xl mt-6">
            Projetos{' '}
            <span className="text-xs italic hidden lg:inline">
              (acesse meu reposítório no github para mais 😊)
            </span>
          </h1>

          <div className="grid justify-center sm:justify-normal sm:grid-cols-2 sm:gap-6 md:grid-cols-3 md:gap-6 lg:flex lg:gap-x-6 mb-24">
            <p className="text-slate-700 dark:text-slate-300">Em reforma</p>
          </div>
        </div>
      </section>
    </>
  )
}

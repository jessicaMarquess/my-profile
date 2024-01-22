import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

const NotFound = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[67.5rem] p-4 lg:px-0 py-4  flex flex-col justify-center mb-1">
        <h1 className="text-slate-700 dark:text-slate-300 text-4xl font-roboto-mono pb-3">
          Página não encontrada 😐
        </h1>
        <a
          href="/"
          className="inline-flex items-center text-purple-400 font-roboto-mono cursor-pointer  hover:underline pb-4"
        >
          Voltar para a página inicial
          <ArrowUpRightIcon className=" ml-1" width={16} height={16} />
        </a>

        <img
          src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExeWpqcDdoenBsdHN6ODMwendqZ3BzMzR0Z2VqNmZub2VldjFmbHRzciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V97oPD3JrHDb16goXV/giphy.gif"
          alt="Menina chorando"
        />
      </div>
    </div>
  )
}

export default NotFound

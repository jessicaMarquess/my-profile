import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

export interface ProjectsCardProps {
  title: string
  link: string
  img: string
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ title, link, img }) => {
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat cursor-pointer text-slate-700 dark:text-slate-200 h-auto bg-purple-500 w-80 sm:w-60 h-50 my-2 rounded-md"
        onClick={() => window.open(link)}
      >
        <img
          src={img}
          alt={`Foto do site ${title}`}
          className="rounded-t-md h-40 w-80 sm:w-60 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-purple-500 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-50" />
        <a
          className="pl-2 inline-flex items-center text-slate-700 dark:text-slate-200 text-nowrap text-xs font-roboto-mono hover:underline"
          href="/perfil-profissional"
        >
          {title}
          <ArrowUpRightIcon className="ml-1" width={16} height={16} />
        </a>
      </div>
    </>
  )
}

export default ProjectsCard

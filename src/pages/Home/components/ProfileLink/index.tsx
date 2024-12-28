import { ArrowUpRightIcon } from '@heroicons/react/20/solid'

interface ProfileLinkProps {
  title: string
  href: string
}

const ProfileLink: React.FC<ProfileLinkProps> = ({ title, href }) => {
  return (
    <a
      className="inline-flex items-center text-purple-500 font-roboto-mono cursor-pointer hover:underline"
      href={href}
    >
      {title}
      <ArrowUpRightIcon
        className="ml-1 hidden sm:inline"
        width={16}
        height={16}
      />
    </a>
  )
}

export default ProfileLink

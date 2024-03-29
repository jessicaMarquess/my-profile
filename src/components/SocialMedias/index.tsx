import React from 'react'
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/email'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'
import 'react-social-icons/spotify'

interface ThemeSocialMediasProps {
  theme: string
}

const SocialMedias: React.FC<ThemeSocialMediasProps> = ({ theme }) => {
  return (
    <div className="mx-4 lg:w-[67.5rem] lg:mx-auto flex">
      <div className="lg:-ml-3">
        <SocialIcon
          bgColor="transparent"
          fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`}
          url="https://www.linkedin.com/in/jessica-maria-marques/"
          target="_blank"
          className="hover:scale-125 transition-transform duration-300 ease-in-out"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`}
          network="email"
          url="mailto:jessica.marques.dev@gmail.com"
          className="hover:scale-125  transition-transform duration-300 ease-in-out"
          target="_blank"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`}
          url="https://github.com/jessicaMarquess"
          className="hover:scale-125  transition-transform duration-300 ease-in-out"
          target="_blank"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`}
          url="https://www.instagram.com/jessicamarques.css/"
          className="hover:scale-125 transition-transform duration-300 ease-in-out"
          target="_blank"
        />
        <SocialIcon
          bgColor="transparent"
          fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`}
          url="https://open.spotify.com/user/pthm6sw6nupko1l1x8emhccfm"
          className="hover:scale-125 transition-transform duration-300 ease-in-out"
          target="_blank"
        />
      </div>
    </div>
  )
}

export default SocialMedias

import React from "react";
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/email'
import 'react-social-icons/instagram'
import 'react-social-icons/linkedin'

interface ThemeSocialMediasProps {
  theme: string;
}

const SocialMedias: React.FC<ThemeSocialMediasProps> = ({ theme }) => {
  return (
    <div className='mx-4 lg:w-[67.5rem] lg:mx-auto'>
      <div className='xl:-ml-3'>
        <SocialIcon bgColor='transparent' fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`} url='https://www.linkedin.com/in/jessica-maria-marques/' className='hover:scale-125 transition-transform duration-300 ease-in-out'
        />
        <SocialIcon bgColor='transparent' fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`} network='email' url='mailto:jessica.marques.dev@gmail.com' className='hover:scale-125  transition-transform duration-300 ease-in-out' />
        <SocialIcon bgColor='transparent' fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`} url='https://github.com/jessicaMarquess' className='hover:scale-125  transition-transform duration-300 ease-in-out' />
        <SocialIcon bgColor='transparent' fgColor={`${theme === 'dark' ? 'white' : '#4b5563'}`} url='https://www.instagram.com/jessicamarques.css/' className='hover:scale-125 transition-transform duration-300 ease-in-out' />
      </div>
    </div>
  )
}

export default SocialMedias
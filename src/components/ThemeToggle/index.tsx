import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

interface ThemeToggleProps {
  toggleTheme: () => void
  theme: string
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => {
  return (
    <label className="inline-flex relative items-center mr-5 cursor-pointer">
      <div className="mr-2 text-sm font-medium text-gray-900">
        <SunIcon className="h-6 w-6 text-purple-400" />
      </div>
      <label className="relative inline-flex items-center me-5 cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={theme === 'dark'}
        />
        <div
          className={`w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-purple-400 dark:bg-gray-400 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:dark:bg-purple-400 peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-purple-400 after:border-gray-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:dark:bg-gray-400 peer-checked:bg-gray-300`}
          onClick={toggleTheme}
        ></div>
        <div className="ml-2">
          <MoonIcon className="h-6 w-6 text-purple-400" />
        </div>
      </label>
    </label>
  )
}

export default ThemeToggle

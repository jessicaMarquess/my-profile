import React from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/20/solid'

interface ThemeToggleProps {
  toggleTheme: () => void
  theme: string
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => (
  <button
    type="button"
    onClick={toggleTheme}
    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-400 text-slate-700 dark:border-slate-500 dark:text-slate-200"
    aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
    title={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
  >
    {theme === 'dark' ? (
      <SunIcon className="h-5 w-5" aria-hidden="true" />
    ) : (
      <MoonIcon className="h-5 w-5" aria-hidden="true" />
    )}
  </button>
)

export default ThemeToggle

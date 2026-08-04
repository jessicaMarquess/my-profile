import React from 'react'
import ThemeToggle from '../ThemeToggle'

interface ThemeHeaderProps {
  toggleTheme: () => void
  theme: string
}

const Header: React.FC<ThemeHeaderProps> = ({ toggleTheme, theme }) => (
  <header className="site-header">
    <a className="site-brand" href="/" aria-label="Voltar ao início">
      JM<span>.</span>
    </a>
    <nav aria-label="Navegação principal">
      <a href="#projetos">Projetos</a>
      <a href="#experiencia">Experiência</a>
      <a href="#contato">Contato</a>
    </nav>
    <ThemeToggle toggleTheme={toggleTheme} theme={theme} />
  </header>
)

export default Header

import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProfessionalProfile } from './pages/ProfessionalProfile'
import { PessoalProfile } from './pages/PessoalProfile'
import React from 'react'
import NotFound from './pages/NotFound'

interface ThemeProps {
  theme: string
}

export const Router: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/perfil-profissional" element={<ProfessionalProfile />} />
        <Route path="/perfil-pessoal" element={<PessoalProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

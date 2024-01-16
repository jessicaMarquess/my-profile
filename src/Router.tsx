import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Profissional } from './pages/Profissional'
import { Pessoal } from './pages/Pessoal'
import React from 'react'

interface ThemeProps {
  theme: string
}

export const Router: React.FC<ThemeProps> = ({ theme }) => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home theme={theme} />} />
        <Route path="/perfil-profissional" element={<Profissional />} />
        <Route path="/perfil-pessoal" element={<Pessoal />} />
      </Routes>
    </div>
  )
}

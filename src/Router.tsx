import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { ProfessionalProfile } from './pages/ProfessionalProfile'
import { PessoalProfile } from './pages/PessoalProfile'
import NotFound from './pages/NotFound'

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil-profissional" element={<ProfessionalProfile />} />
        <Route path="/perfil-pessoal" element={<PessoalProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

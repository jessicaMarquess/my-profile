import { useState, useEffect } from 'react'
import Header from './components/Header'

import Footer from './components/Footer'
import { Router } from './Router'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'dark',
  )

  const darkQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const element = document.documentElement

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'))
  }

  useEffect(() => {
    setTheme(localStorage.theme || (darkQuery.matches ? 'dark' : 'light'))
  }, [darkQuery])

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark')
    } else {
      element.classList.remove('dark')
    }

    localStorage.setItem('theme', String(theme))
  }, [theme, element])

  useEffect(() => {
    const onWindowMatch = () => {
      if (
        localStorage.theme === 'dark' ||
        (!('theme' in localStorage) && darkQuery.matches)
      ) {
        setTheme('dark')
      } else {
        setTheme('light')
      }
    }

    onWindowMatch()

    darkQuery.addListener(onWindowMatch)

    return () => {
      darkQuery.removeListener(onWindowMatch)
    }
  }, [darkQuery])

  return (
    <>
      <div
        className={`relative min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-slate-200 dark:bg-black flex flex-col duration-100`}
      >
        <Header toggleTheme={toggleTheme} theme={theme || ''} />
        <BrowserRouter>
          <Router theme={theme || ''} />
        </BrowserRouter>
        <Footer />
      </div>
    </>
  )
}

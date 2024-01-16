import { useState, useEffect } from 'react';
import Header from './components/Header';
import Welcome from './components/Welcome';
import SocialMedias from './components/SocialMedias';

export default function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : 'dark');
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const element = document.documentElement;

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    setTheme(localStorage.theme || (darkQuery.matches ? 'dark' : 'light'));
  }, [darkQuery]);

  useEffect(() => {
    if (theme === 'dark') {
      element.classList.add('dark');
    } else {
      element.classList.remove('dark');
    }

    localStorage.setItem('theme', String(theme));
  }, [theme, element]);

  useEffect(() => {
    const onWindowMatch = () => {
      if (localStorage.theme === 'dark' || (!("theme" in localStorage) && darkQuery.matches)) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };

    onWindowMatch();

    darkQuery.addListener(onWindowMatch);

    return () => {
      darkQuery.removeListener(onWindowMatch);
    };
  }, [darkQuery]);

  return (
    <>
      <div className={`relative min-h-screen ${theme === 'dark' ? 'dark' : ''} bg-slate-200 dark:bg-black flex flex-col duration-100`}>
        <Header toggleTheme={toggleTheme} theme={theme || ''} />
        <Welcome theme={String(theme)} />
        <SocialMedias theme={String(theme)} />
        <footer className='border border-x-0 border-b-0 border-slate-700 dark:border-slate-300text-center p-4 fixed bottom-0 w-full text-slate-700 dark:text-slate-300 text-center'>
          FOOTER - MAS AINDA NÃO SEI O QUE COLOCAR AQUI RS
        </footer>
      </div>
    </>
  );
}
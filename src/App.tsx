import { useState, useEffect } from 'react';
import ThemeToggle from './ThemeToggle';

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
    <div className={`w-screen h-screen ${theme === 'dark' ? 'dark' : ''} bg-slate-200 dark:bg-black flex flex-col duration-100`}>
      <div className="p-4">
        <ThemeToggle toggleTheme={toggleTheme} theme={theme || ''} />
      </div>
      <div className="mt-10 lg:mt-40 lg:mx-4 w-full flex flex-col items-center">
        <img src="https://media.tenor.com/mhLPO2VldCkAAAAM/0001.gif" className=" w-80 h-80 pb-6" />
        <h1 className={`text-${theme === 'dark' ? 'white' : 'slate-700'} dark:text-slate-300 font-sans text-3xl`}>Oi! Meu nome é <strong className="text-purple-500 pb-2">Jessica 🙃</strong></h1>

        <p className={`text-${theme === 'dark' ? 'white' : 'slate-700'} dark:text-slate-300 text-center`}>Esta página ainda está em desenvolvimento ⚒️. <br />Enquanto isso, que tal olhar meus repositórios no <a className={`font-bold text-${theme === 'dark' ? 'purple-300' : 'purple-400'} hover:underline`} href="https://github.com/jessicaMarquess" target="_blank"> github</a>??</p>
      </div>
    </div>
  );
}
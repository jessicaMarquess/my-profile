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
      <div className={`w-screen h-screen ${theme === 'dark' ? 'dark' : ''} bg-slate-200 dark:bg-black flex flex-col duration-100`}>
        <Header toggleTheme={toggleTheme} theme={theme || ''} />
        <Welcome theme={String(theme)} />

        <SocialMedias theme={String(theme)} />
        <p className={` text-${theme === 'dark' ? 'white' : 'slate-700'} dark:text-slate-300 text-3xl mx-4 lg:mx-auto`}>
          Esse site ainda está em <span className='text-red-500'>desenvolvimento⚒️⚒️</span>.
        </p>

        <div className='bg-slate-300 dark:bg-black flex justify-center'>
          <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdTdsZDhtNzV6M2pyenFhcnYyMTdqN2JkNXZhZmQyZ2lhbzZvcHljbSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/f7b9ltJ4FrhnsKjYx2/giphy.gif" />
        </div>
      </div>
    </>
  );
}
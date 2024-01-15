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
    <div className={` w-screen h-screen ${theme === 'dark' ? 'dark' : ''} bg-slate-200 dark:bg-black flex flex-col duration-100`}>
      <Header toggleTheme={toggleTheme} theme={theme || ''} />
      <Welcome theme={String(theme)} />
      <div className='mx-4 lg:w-[67.5rem] lg:mx-auto'>
        <SocialMedias theme={String(theme)} />
      </div>
      <p className={`mt-20 lg:mt-40 text-${theme === 'dark' ? 'white' : 'slate-700'} dark:text-slate-300 text-3xl mx-4 lg:mx-auto`}>
        Esse site ainda está em <span className='text-red-500'>desenvolvimento⚒️⚒️</span>.
      </p>
      <iframe src="https://giphy.com/embed/xZsLh7B3KMMyUptD9D" width="480" height="270" className="mt-2 mx-4 lg:mx-auto giphy-embed" allowFullScreen></iframe><p></p>
    </div>
  );
}
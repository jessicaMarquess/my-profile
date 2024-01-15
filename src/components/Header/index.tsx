import React from "react";
import ThemeToggle from "../ThemeToggle";
interface ThemeHeaderProps {
  toggleTheme: () => void;
  theme: string;
}

const Header: React.FC<ThemeHeaderProps> = ({ toggleTheme, theme }) => (

  <div className="flex justify-center border border-x-0 border-t-0 border-slate-700 dark:border-white">
    <div className="w-[67.5rem] p-4 pr-0 lg:pr-4 flex justify-between mb-1">
      <h1 className='dark:text-slate-300 text-2xl sm:text-3xl font-semibold font-roboto-mono text-slate-700 lg:-ml-4'>
        Bem-vindos!🖤
      </h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme || ''} />
    </div>
  </div>
)

export default Header;
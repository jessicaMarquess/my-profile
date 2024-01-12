import React from "react";
import ThemeToggle from "../ThemeToggle";
interface ThemeToggleProps {
  toggleTheme: () => void;
  theme: string;
}
const Header: React.FC<ThemeToggleProps> = ({ toggleTheme, theme }) => (

  <div className="flex justify-center ">
    <div className="w-[67.5rem] p-4 pr-0 lg:pr-4 flex justify-between mb-1">
      <h1 className='dark:text-white text-2xl font-semibold font-roboto-mono text-slate-700'>
        Bem-vindos!🖤
      </h1>
      <ThemeToggle toggleTheme={toggleTheme} theme={theme || ''} />
    </div>
  </div>
)

export default Header;
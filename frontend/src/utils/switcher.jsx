import { useEffect, useState } from 'react';
import SunIcon from '../assets/images/Toggle/SunIcon.svg';
import MoonIcon from '../assets/images/Toggle/MoonIcon.svg';

export function Switcher() {
  const [isDark, setIsDark] = useState(localStorage.theme === 'dark');

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark);
  }, [isDark]);

  function handleToggle() {
    const newTheme = !isDark ? 'dark' : 'light';
    setIsDark(!isDark);
    localStorage.theme = newTheme;

    document.documentElement.classList.toggle('dark', !isDark);
  }

  return (
    <button onClick={handleToggle} className="p-2 rounded-full ">
      {isDark ? (
        <img src={MoonIcon} alt="Dark Mode" className="w-7 h-7" />
      ) : (
        <img src={SunIcon} alt="Light Mode" className="w-10 h-7" />
      )}
    </button>
  );
}

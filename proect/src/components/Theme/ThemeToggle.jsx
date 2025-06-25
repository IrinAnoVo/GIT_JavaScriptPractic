import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../../store/features/themeSlice'; 
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.mode);

  useEffect(() => {
    document.body.classList.toggle('dark-theme', theme === 'dark');
    document.body.classList.toggle('light-theme', theme === 'light');
  }, [theme]);

  const handleToggle = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      className="svg-toggle"
      onClick={handleToggle}
      aria-label="Toggle theme"
    >
      <svg
        className={`theme-icon ${theme}`}
        width="60"
        height="32"
        viewBox="0 0 60 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="60" height="32" rx="16" fill={theme === 'dark' ? '#8B8B8B' : 'white'} />
        <circle cx={theme === 'dark' ? '16' : '44'} cy="16" r="14" fill={theme === 'dark' ? 'white' : '#8B8B8B'} />
      </svg>
    </button>
  );
};

export default ThemeToggle; 
import React from 'react';
import { useTheme } from './themeContext';

const Header = () => {
  const { theme, setTheme } = useTheme()!;
  return (
    <div style={{ backgroundColor: theme }}>
      <select value={theme} onChange={(e) => setTheme(e.currentTarget.value)}>
        <option value="white">White</option>
        <option value="lightblue">Blue</option>
        <option value="lightgreen">Green</option>
      </select>
      Hello
    </div>
  );
};

export default Header;

import React from 'react';
import { useTheme } from './themeContext';

const Header = () => {
  const theme = useTheme();
  return <div style={{ backgroundColor: theme }}>Hello</div>;
};

export default Header;

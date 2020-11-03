import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};
const defaultTheme = 'white';
const ThemeContext = React.createContext(defaultTheme);
export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(defaultTheme);

  React.useEffect(() => {
    const currentTheme = 'lightblue';
    setTheme(currentTheme);
  }, []);
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

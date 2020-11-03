import React, { useState } from 'react';

type Props = {
  children: React.ReactNode;
};

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

const ThemeContext = React.createContext<ThemeContextType | undefined>(
  undefined
);
export const useTheme = () => React.useContext(ThemeContext);

export const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState(undefined);

  React.useEffect(() => {
    const currentTheme = 'lightblue';
    setTheme(currentTheme);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

import React from 'react';
import Header from './Header';
import './App.css';
import { ThemeProvider } from './themeContext';

const App = () => {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
      </div>
    </ThemeProvider>
  );
};

export default App;

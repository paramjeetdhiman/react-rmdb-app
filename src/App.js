import React from 'react';

//components
import Header from './components/Header';
import Home from './components/Home';
//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <GlobalStyle />
    </>
  );
};

export default App;

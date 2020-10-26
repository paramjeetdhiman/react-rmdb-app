import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//components
import Header from './components/Header';
import Home from './components/Home';
import Movie from './components/Movie';
import NotFound from './components/NotFound';

//styles
import { GlobalStyle } from './GlobalStyles';

const App = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:movieId" element={<Movie />} />
      {/* /:movieId routers params */}

      <Route path="/*" element={<NotFound />} />
      {/* fallack route not found */}
    </Routes>
    <GlobalStyle />
  </Router>
);

export default App;

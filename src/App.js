import React from 'react';

// component
import Header from './components/Header';
import Home from './components/Home/Home';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

// style
import { GlobalStyle } from './GlobalStyle'
import Image from './components/Image/Image';
import NotFound from './components/NotFound/NotFound';
import Favourite from './components/Favourite';

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/image/:date' element={<Image/>} />
      <Route path='/favourites' element={<Favourite/>} />
      <Route path='/*' element={<NotFound/>} />
    </Routes>
    <GlobalStyle />
  </BrowserRouter>
);

export default App;

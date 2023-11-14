import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './view/Home/Home';
import Photographer from './view/Photographer/Photographer';
import './index.scss';

const root = createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/photographer/:id' element={<Photographer />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);

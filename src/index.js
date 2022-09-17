import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom"

import App from './App';
import CocktailByLetter from './pages/CocktailByLetter';
import CocktailsAlcholic from './pages/CocktailsAlcholic';
import CocktailDetail from './pages/CocktailDetail';

import Results from './components/Results';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cocktails-by-letter' element={<CocktailByLetter />}/>
        <Route path='/cocktails-alcoholic' element={<CocktailsAlcholic />}/>
        <Route path='/cocktail/:id' element={<CocktailDetail />}/>
        <Route path='/search/:query' element={<Results />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

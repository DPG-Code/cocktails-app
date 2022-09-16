import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import App from './App';
import CocktailByLetter from './pages/CocktailByLetter';
import CocktailsAlcholic from './pages/CocktailsAlcholic';
import CocktailDetail from './pages/CocktailDetail';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Link to='/'>Home</Link>
      <Link to='/cocktails-by-letter'>Cocktail by letter</Link>
      <Link to='/cocktails-alcoholic'>Cocktail alcoholic</Link>

      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/cocktails-by-letter' element={<CocktailByLetter />}/>
        <Route path='/cocktails-alcoholic' element={<CocktailsAlcholic />}/>
        <Route path='/cocktail/:id' element={<CocktailDetail />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();

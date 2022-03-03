import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home.jsx';
import Housing from './pages/Housing/Housing';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import About from './pages/About/About';


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>

    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);

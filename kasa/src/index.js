import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home.jsx';
import Housing from './pages/Housing/Housing';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from "react-router-dom"
import About from './pages/About/About';
import Error from './components/Error/Error'


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/housing/:id' element={<Housing />} />
      <Route path='*' element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);

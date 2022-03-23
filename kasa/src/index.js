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
import { routes } from './routes'


ReactDOM.render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path={routes.mainPath} element={<Home />}/>
      <Route path={routes.aboutPath} element={<About />}/>
      <Route path={routes.housingPath} element={<Housing />} />
      <Route path={routes.errorPath} element={<Error />} />
    </Routes>
    <Footer />
  </BrowserRouter>,
  document.getElementById('root')
);


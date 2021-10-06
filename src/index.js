import React from 'react';
import ReactDOM from 'react-dom';
import Banner from './client/banner';
import Benefits from './client/benefits';
import Footer from './client/footer';
import Header from './client/header';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Banner />
    <Benefits />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
reportWebVitals();

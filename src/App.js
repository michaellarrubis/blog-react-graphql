import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/style.scss'

import Pages from './pages/Pages';
import Header from './components/common/Header';
import Footer from './components/common/Footer';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
    		<Header />
	      <Pages />
	    	<Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

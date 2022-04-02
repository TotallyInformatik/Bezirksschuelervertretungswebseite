import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation, } from 'react-router-dom';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./css/base.css"

import Home from "./components/Pages/Home/home";
import Navigation from "./components/reusables/Navigation/navigation";

import AOS from 'aos';
import 'aos/dist/aos.css';
import BDK35 from './components/Pages/35-BDK/35-BDK';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

//?????? why no work?
AOS.init({
  anchorPlacement: 'top-center'
});


// weitere routes müssen noch hinzugefügt werden
// TODO: dass die "aktuelles" route auf die 35 BDK Seite führt ist nur ein Test

function TransitionContent() {

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={2000}
        classNames="fade"
        key={location.key}
      >
        <div>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/aktuelles" element={<BDK35 />} /> 
            <Route path="/dokumente" element={<Home />} />
            <Route path="/resolutionen" element={<Home />} />
            <Route path="/reden" element={<Home />} />
            <Route path="/mach-mit" element={<Home />} />
            <Route path="/contact" element={<Home />} />
          </Routes>
        </div>
      </CSSTransition>
    </TransitionGroup>
  ); 
}



ReactDOM.render(
  <Router>
    <Navigation />
    <TransitionContent />
  </Router>,
  document.getElementById('root')
);
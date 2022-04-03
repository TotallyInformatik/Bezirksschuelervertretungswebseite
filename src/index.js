import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./css/base.css"


import AOS from 'aos';
import 'aos/dist/aos.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

/// components and pages
import Home from "./components/Pages/Home/home";
import Navigation from "./components/reusables/Navigation/navigation";
import BDK35 from './components/Pages/35-BDK/35-BDK';
import BDK34 from './components/Pages/34-BDK/34-BDK';
import AktionsTagGerechteBildung from './components/Pages/AktionsTagGerechteBildung/AktionsTagGerechteBildung';

//?????? why no work?
AOS.init({
  anchorPlacement: 'top-center'
});


// weitere routes müssen noch hinzugefügt werden
// TODO: dass die "aktuelles" route auf die 35 BDK Seite führt ist nur ein Test
// TODO: 404 Page

function TransitionContent() {

  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        timeout={2000}
        classNames="fade"
        key={location.key}
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/aktuelles" element={<BDK34 type="page" to="/aktuelles" />} /> 
          <Route path="/dokumente" element={<Home />} />
          <Route path="/resolutionen" element={<Home />} />
          <Route path="/reden" element={<Home />} />
          <Route path="/mach-mit" element={<Home />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<Home />}></Route> 

          <Route path="/aktionstag-gerechte-bildung" element={<AktionsTagGerechteBildung type="page" />}></Route>
          <Route path="/34-bdk" element={<BDK34 type="page"/>}></Route>
          <Route path="/35-bdk" element={<BDK35 type="page"/>}></Route>

        </Routes>
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
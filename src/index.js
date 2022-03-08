import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-react';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./css/base.css"

import Home from "./components/Pages/Home/home";
import PageFooter from "./components/reusables/Footer/footer";
import Navigation from "./components/reusables/Navigation/navigation";

import AOS from 'aos';
import 'aos/dist/aos.css';

//?????? why no work?
AOS.init({
  anchorPlacement: 'top-center'
});


// weitere routes müssen noch hinzugefügt werden

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aktuelles" element={<Home />} />
      <Route path="/dokumente" element={<Home />} />
      <Route path="/resolutionen" element={<Home />} />
      <Route path="/reden" element={<Home />} />
      <Route path="/mach-mit" element={<Home />} />
      <Route path="/contact" element={<Home />} />
    </Routes>
    <PageFooter />
  </Router>,
  document.getElementById('root')
);
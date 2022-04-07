import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, useLocation, HashRouter } from 'react-router-dom';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./css/base.css"

import AOS from 'aos';
import 'aos/dist/aos.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

/// components and pages
import Home from "./components/Pages/Home/home";
import BDK35 from './components/Pages/TemplateInstances/35-BDK/35-BDK';
import BDK34 from './components/Pages/TemplateInstances/34-BDK/34-BDK';
import AktionsTagGerechteBildung from './components/Pages/TemplateInstances/AktionsTagGerechteBildung/AktionsTagGerechteBildung';
import ZeroCovid from './components/Pages/TemplateInstances/Zero-Covid/ZeroCovid';
import GlobalerKlimaStreik19_03_21 from './components/Pages/TemplateInstances/GlobalerKlimaStreik19_03_21/GlobalerKlimaStreik';
import RedHandDay2021 from './components/Pages/TemplateInstances/RedHandDay_2021/RedHandDay';
import DSSQ_06_12_20 from './components/Pages/TemplateInstances/KeinMeterFürQuerdenken/DSSQ06_12_20';
import BezirksvorstandssitzungenOnline from './components/Pages/TemplateInstances/BezirksvorstandssitzungenOnline/OnlineSitzungenBSV';
import Arbeitsprogramm2020_21 from './components/Pages/TemplateInstances/Arbeitsprogramm2020/Arbeitsprogramm2020_21';
import BDK33 from './components/Pages/TemplateInstances/33-BDK/33-BDK';
import Page404 from './components/Pages/404/404NotFound';


AOS.init({
  anchorPlacement: 'top-center'
});

// weitere routes müssen noch hinzugefügt werden
// TODO: dass die "aktuelles" route auf die 35 BDK Seite führt ist nur ein Test
// TODO: 404 Page
// TODO: icon replacement phosphoricons

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

          <Route path="/einladung-32-bdk-6-6-2020/" element={<BDK33 type="page" />}></Route>
          <Route path="/34-bdk" element={<BDK34 type="page"/>}></Route>
          <Route path="/35-bdk" element={<BDK35 type="page"/>}></Route>

          <Route path="/aktionstag-gerechte-bildung" element={<AktionsTagGerechteBildung type="page" />}></Route>
          <Route path="/bezirksvorstandssitzungen-online" element={<BezirksvorstandssitzungenOnline type="page" />}></Route>
          <Route path="/arbeitsprogramm-2020-21" element={<Arbeitsprogramm2020_21 type="page" />}></Route>

          <Route path="/rede-zerocovid" element={<ZeroCovid type="page" />}></Route>
          <Route path="/rede-globaler-klimastreik-19-03-21" element={<GlobalerKlimaStreik19_03_21 type="page" />}></Route>
          <Route path="/rede-red-hand-day" element={<RedHandDay2021 type="page" />}></Route>
          <Route path="/rede-dssq" element={<DSSQ_06_12_20 type="page" />}></Route>


          <Route path="*" element={<Page404 />}></Route> 

        </Routes>
      </CSSTransition>
    </TransitionGroup>
  ); 
}



ReactDOM.render(
  <HashRouter>
    <TransitionContent />
  </HashRouter>,
  document.getElementById('root')
);
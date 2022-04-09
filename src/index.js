import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, HashRouter, useLocation } from 'react-router-dom';

import 'overlayscrollbars/css/OverlayScrollbars.css';
import "./css/base.css"



import AOS from 'aos';
import 'aos/dist/aos.css';

import { TransitionGroup, CSSTransition } from 'react-transition-group';

/// components and pages
import PostContext from './PostContext';
import Home from "./components/Pages/Home/home";
import Page404 from './components/Pages/404/404NotFound';
import Aktuelles from './components/Pages/Aktuelles/Aktuelles';
import Navigation from './components/reusables/Navigation/navigation';
import PageFooter from './components/reusables/Footer/footer';
import MachMit from './components/Pages/MachMit/MachMit';
import Kontakt from './components/Pages/Kontakt/Kontakt';


AOS.init({
  anchorPlacement: 'top-center'
});


class TransitionContent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let routes = [];
    for (let post of this.context.posts) {
      let PostComponent = post[0];
      let postLink = post[1];

      routes.push(<Route key={postLink} path={postLink} element={<PostComponent type="page"></PostComponent>} ></Route>);

    }

    return (
      <Routes location={this.props.location}>
        <Route path="/" element={<Home />} />
        <Route path="/aktuelles" element={<Aktuelles />} />
        <Route path="/mach-mit" element={<MachMit />} />
        <Route path="/contact" element={<Kontakt />} />
        
        { routes }

        <Route path="*" element={<Page404 />}></Route> 
      </Routes>
    ); 
  }
}

TransitionContent.contextType = PostContext;

/// ????
Navigation.contextType = PostContext;

function Transition() {

  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition
        timeout={2000}
        classNames="fade"
        key={location.key}
      >
        <TransitionContent location={location}></TransitionContent>
      </CSSTransition>
    </TransitionGroup>
  );

}


ReactDOM.render(
  <Router>
    <Transition />
  </Router>,
  document.getElementById('root')
);
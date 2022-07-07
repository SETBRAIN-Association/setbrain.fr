import {Redirect, Router, useLocation} from '@reach/router';
import Home from './scenes/Home/Home';
import { Header } from './components/Header/Header';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Projects } from './scenes/Projects/Projects';
import { News } from './scenes/News/News';
import { About } from './scenes/About/About';
import { Contact } from './scenes/Contact/Contact';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react';

function ScrollToTop ({ children, path }) {
  React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return children;
}

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='App'>
      <Header></Header>
      <Router className='router'>
        <ScrollToTop path='/'>
          <Redirect from='/' to='home'></Redirect>
          <Home path='home'></Home>
          <Projects path='projects'></Projects>
          <News path='news'></News>
          <About path='about'></About>
          <Contact path='contact'></Contact>
        </ScrollToTop>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

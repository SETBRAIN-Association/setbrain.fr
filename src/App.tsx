import {Redirect, Router, useLocation} from '@reach/router';
import Index from './pages/Home';
import { Header } from './components/Header/Header';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Projects } from './pages/Projects/Projects';
import { News } from './pages/News/News';
import { About } from './pages/About/About';
import { Contact } from './pages/Contact/Contact';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger';
import React from 'react';

function ScrollToTop (properties: any) {
  React.useLayoutEffect(() => window.scrollTo(0, 0), [location.pathname]);
  return properties.children;
}

function App() {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='App'>
      <Header></Header>
      <Router className='router'>
        <ScrollToTop path='/'>
          <Redirect from='/' to='home'></Redirect>
          <Index path='home'></Index>
          <Projects path='projects'></Projects>
          <News path='news'></News>
          <About path='about'></About>
          <Contact path='contact'></Contact>
        </ScrollToTop>
      </Router>

    </div>
  );
}

export default App;

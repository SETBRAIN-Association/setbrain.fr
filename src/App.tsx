import { Redirect, Router } from '@reach/router';
import Home from './scenes/Home/Home';
import { Header } from './components/Header/Header';
import './App.scss';
import { Footer } from './components/Footer/Footer';
import { Projects } from './scenes/Projects/Projects';
import { News } from './scenes/News/News';
import { About } from './scenes/About/About';
import { Contact } from './scenes/Contact/Contact';

function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Router className='router'>
        <Redirect from='/' to='home'></Redirect>
        <Home path='home'></Home>
        <Projects path='projects'></Projects>
        <News path='news'></News>
        <About path='about'></About>
        <Contact path='contact'></Contact>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

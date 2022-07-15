import {AppProps} from 'next/app';
import './styles.scss';
import {Footer} from '../components/Footer/Footer';
import {Header} from '../components/Header/Header';

export default function App ({Component, pageProps}: AppProps) {
  return (
    <div className='layout'>
      <Header></Header>
      <Component {...pageProps} />;
      <Footer></Footer>
    </div>);
}


import { AppProps } from 'next/app';
import './styles.scss';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

export default function App({ Component, pageProps }: AppProps) {
  gsap.registerPlugin(ScrollTrigger);

  return (
    <div className='layout'>
      <Header></Header>
      <Component {...pageProps} />;<Footer></Footer>
    </div>
  );
}

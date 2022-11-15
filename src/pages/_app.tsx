import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useEffect, useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import './styles.scss';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ReactGA from 'react-ga4';

export default function App({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter();
  const containerRef = useRef(null);

  useEffect(() => {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window._axcb = window._axcb || [];
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window._axcb.push((axeptio) => {
      axeptio.on('cookies:complete', (choices: any) => {
        if (choices.google_analytics) {
          ReactGA.initialize('G-GM365J1KXT');
          ReactGA.send('pageview');
        }else {
          const cookies = document.cookie.split(';');
          for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
            document.cookie = name + '=;expires=Thu, 01 Jan 1970 00:00:00 GMT';
          }
        }
      });
    });
    
  }, [asPath]);

  return (
    <>
      <Header></Header>
      <RLSProvider
        options={{
          smooth: true,
          multiplier: 1,
        }}
        watch={[asPath]}
        location={asPath}
        onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0 })}
        containerRef={containerRef}
      >
        <div data-scroll-container='true' ref={containerRef} className='layout'>
          <Component {...pageProps} />;
          <Footer></Footer>
        </div>
      </RLSProvider>
    </>
  );
}

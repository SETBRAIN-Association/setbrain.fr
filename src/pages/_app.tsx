import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import { useRef } from 'react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import './styles.scss';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import 'locomotive-scroll/dist/locomotive-scroll.css';

export default function App({ Component, pageProps }: AppProps) {

  const { asPath } = useRouter();
  const containerRef = useRef(null);

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

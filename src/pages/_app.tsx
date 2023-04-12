import '@/styles/globals.css';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import 'custom-cursor-react/dist/index.css';
import CustomCursor from 'custom-cursor-react';
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll';
import React, { useRef } from 'react';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  const containerRef = useRef(null);

  return <>
      <RLSProvider
      options={{
        smooth: true,
        multiplier: 1,
      }}
      watch={[asPath]}
      location={asPath}
      onLocationChange={(scroll: any) => scroll.scrollTo(0, { duration: 0 })}
      containerRef={containerRef}
      direction='horizontal'
    >
      <CustomCursor
        smoothness={{
          movement: 0.1,
          scale: 0.1,
          opacity: 0.2,
        }}
        targets={['button', 'a']}
        targetScale={1.1}
        targetOpacity={0.}
      />
      <div data-scroll-container='true' ref={containerRef} className='layout'>
        <Component {...pageProps} />
      </div>
    </RLSProvider>

  </>;
}

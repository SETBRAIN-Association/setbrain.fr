import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='fr'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/Logo_Mobile.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        <Script
          strategy='beforeInteractive'
          dangerouslySetInnerHTML={{
            __html: `
          window.axeptioSettings = {
            clientId: "62ece446ce5a08b268c1b8b6",
            cookiesVersion: "setbrain-fr-2",
          };
          
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk-slim.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `,
          }}
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import { Html, Head, Main, NextScript } from 'next/document';
import {Footer} from "../components/Footer/Footer";
import React from "react";


export default function Document() {
  return (
      <Html lang="fr">
          <Head>
            <meta charSet="UTF-8"/>
            <link rel="icon" type="image/svg+xml" href='/src/assets/icons/favicon.svg'/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
            <link
                href="https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap"
                rel="stylesheet"/>
            <link rel="stylesheet" href="/Users/xmanu/IdeaProjects/setbrain-website-frontend/public/uicons-solid-straight.css"/>
          </Head>
      <body>
          <Main />
      <NextScript />
      </body>
      </Html>
  );
}
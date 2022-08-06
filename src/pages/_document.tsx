import { Html, Head, Main, NextScript } from 'next/document';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang='fr'>
      <Head>
        <meta charSet='UTF-8' />
        <link rel='icon' type='image/svg+xml' href='/src/assets/icons/favicon.svg' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
        <link
          href='https://fonts.googleapis.com/css2?family=Sora:wght@100;200;300;400;500;600;700;800&display=swap'
          rel='stylesheet'
        />
        <Script strategy='beforeInteractive' dangerouslySetInnerHTML={{__html: `
          window.axeptioSettings = {
            clientId: "62ece446ce5a08b268c1b8b6",
            cookiesVersion: "setbrain-fr-2",
          };
          
          (function(d, s) {
            var t = d.getElementsByTagName(s)[0], e = d.createElement(s);
            e.async = true; e.src = "//static.axept.io/sdk-slim.js";
            t.parentNode.insertBefore(e, t);
          })(document, "script");
        `}}></Script>
        <Script strategy='afterInteractive' dangerouslySetInnerHTML={{__html: `
            deleteCookie("_ga_GM365J1KXT");
    
           function launchGA() {
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
                    console.log('jj');
            gtag('config', 'G-GM365J1KXT');
          }
          
          function getCookieVal(offset) {
            var endstr=document.cookie.indexOf (";", offset);
            if (endstr==-1)
                    endstr=document.cookie.length;
            return unescape(document.cookie.substring(offset, endstr));
          }
          
          function getCookie (name) {
            var arg=name+"=";
            var alen=arg.length;
            var clen=document.cookie.length;
            var i=0;
            while (i<clen) {
              var j=i+alen;
              if (document.cookie.substring(i, j)==arg)
                                  return getCookieVal (j);
                          i=document.cookie.indexOf(" ",i)+1;
                                  if (i==0) break;}
            return null;
          }
          
          function deleteCookie (name) {
            var exp=new Date();
            exp.setTime (exp.getTime() - 100000);
            var cval=getCookie (name);
            document.cookie=name+"="+cval+"; expires="+exp.toGMTString();
           }
          
          void 0 === window._axcb && (window._axcb = []);
          window._axcb.push(function(axeptio) {
            axeptio.on("cookies:complete", function(choices) {
             if(choices.google_analytics) {
                launchGA();
             }
            });
            axeptio.on("consent:saved", function(result) {
              if(result.consent.accept === false) {
                deleteCookie("_ga_GM365J1KXT");
                deleteCookie("_ga");
                deleteCookie("axeptio_all_vendors");
                deleteCookie("axeptio_cookies");
                deleteCookie("axeptio_authorized_vendors");
              }
            });
          });   
        `}}></Script>
        <Script strategy='beforeInteractive' src="https://www.googletagmanager.com/gtag/js?id=G-GM365J1KXT"></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

import React, { useEffect, useState } from 'react';
import styles from './logo_switcher.module.scss';
import Image from 'next/image';

export const LogoSwitcher = () => {
  const backgrounds = [
    { class: '1', background: 'linear-gradient(225deg, #AC32E4 0%, #7918F2 47.87%, #4801FF 100%)' },
    { class: '2', background: 'linear-gradient(#040404, #040404)' },
    { class: '3', background: 'url(/leaf-background.png)' },
  ];
  const [currentBackground, setCurrentBackground] = useState(0);

  useEffect(() => {
    const changeLogo = setInterval(() => {
      setCurrentBackground(
        currentBackground + 1 === backgrounds.length ? 0 : currentBackground + 1,
      );
    }, 10000);

    return () => {
      clearInterval(changeLogo);
    };
  });

  return (
    <div className={styles['logo-switcher']} data-scroll='true' data-scroll-speed='1.5'>
      <div className={styles['backgrounds'] + styles['background']}>
        {backgrounds.map((background) => (
          <div
            className={background.class}
            key={background.class}
            style={{
              backgroundImage: background.background,
              height: '100%',
              width: '100%',
              zIndex: currentBackground == backgrounds.indexOf(background) ? 1 : 0,
              opacity: currentBackground == backgrounds.indexOf(background) ? 1 : 0,
              transition: '1s',
              position: 'absolute',
            }}
          ></div>
        ))}
      </div>
      <Image
        src='/Logo_Mobile.svg'
        layout='fill'
        className={styles['logo']}
        data-scroll='true'
        data-scroll-speed='1.8'
      ></Image>
    </div>
  );
};

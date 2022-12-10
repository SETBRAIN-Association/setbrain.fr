import React, { useState } from 'react';
import styles from './logo_switcher.module.scss';
import Image from 'next/image';

export const LogoSwitcher = () => {
  const backgrounds = [
    { class: '1', background: 'linear-gradient(225deg, #AC32E4 0%, #7918F2 47.87%, #4801FF 100%)' },
  ];
  const [currentBackground] = useState(0);

  return (
    <div className={styles['logo-switcher']} data-scroll='true' data-scroll-speed='1.1'>
      <div className={styles['backgrounds'] + styles['background']}>
        {backgrounds.map((background) => (
          <div
            className={background.class}
            key={background.class}
            style={{
              backgroundImage: background.background,
              height: '100%',
              width: '100%',
              opacity: currentBackground == backgrounds.indexOf(background) ? 1 : 0,
              transition: '1s',
              position: 'absolute',
            }}
          ></div>
        ))}
      </div>
      <Image
        src='/Logo_Mobile.png'
        layout='fill'
        className={styles['logo']}
      ></Image>
    </div>
  );
};

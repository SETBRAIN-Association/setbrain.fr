import React, { useEffect, useRef, useState } from 'react';
import styles from './_contact-informations.module.scss';
import gsap from 'gsap';
import { Model } from '../Model/Model';

export const ContactInformations = () => {
  const cardRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if(window.innerWidth < 768) setIsMobile(true);

    window.addEventListener('resize', () => {
      if(window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    });
  });

  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 1920) setIsWide(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth > 1920) setIsWide(true);
      else setIsWide(false);
    });

    gsap.from(cardRef.current, { opacity: 0, marginTop: 0, duration: 1 });
  });

  return (
    <div className={styles['contact-informations']}>
      <div className={styles['form']} ref={cardRef}>
        <h1>Informations de contact</h1>
        <p>Notre équipe fait le maximum pour vous répondre sous 24H.</p>
        <div className={styles['contacts']}>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/discord.svg)' }}
            ></span>
            <a href=''>Discord</a>
          </div>
          <div className={styles['media']}>
            <span className={styles['icon']} style={{ backgroundImage: 'url(/gmail.svg)' }}></span>
            <a href=''>Gmail</a>
          </div>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/instagram.svg)' }}
            ></span>
            <a href=''>Instagram</a>
          </div>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/twitter.svg)' }}
            ></span>
            <a href=''>Twitter</a>
          </div>
          <div className={styles['media']}>
            <span
              className={styles['icon']}
              style={{ backgroundImage: 'url(/facebook.svg)' }}
            ></span>
            <a href=''>Facebook</a>
          </div>
        </div>
      </div>
      <div className={styles['illustration']}>
        {isWide ? (
          <>
            <Model
              model={'/pc.gltf'}
              size={{ height: '70%', width: '40%', z: -2 }}
              position={{ left: '50%', top: '-10%' }}
              rotation={{ x: -0.3, y: 0.2, z: 0.1 }}
              scrollSpeed={1}
            ></Model>
            <Model
              model={'/rocket.gltf'}
              size={{ height: '80%', width: '40%', z: -5 }}
              position={{ left: '75%', top: '30%' }}
              rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
              scrollSpeed={2.5}
            ></Model>
          </>
        ) : (
          <>
            <Model
              model={'/pc.gltf'}
              size={{ height: '100%', width: '50%', z: -2 }}
              position={{ left: '30%', top: '-10%' }}
              rotation={{ x: -0.3, y: 0.2, z: 0.1 }}
              scrollSpeed={1}
            ></Model>
            <Model
              model={'/rocket.gltf'}
              size={{ height: '110%', width: '50%', z: -5 }}
              position={{ left: '65%', top: '0%' }}
              rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
              scrollSpeed={2.5}
            ></Model>
          </>
        )}
      </div>
    </div>
  );
};

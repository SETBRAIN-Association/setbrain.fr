import React, { useEffect, useState } from 'react';
import BigTitle from '../components/big-title/big-title';
import { Model } from '../components/Model/Model';
import styles from './index.module.scss';
import Head from 'next/head';

export default function Index() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    });
  });

  return (
    <div className={styles['Home']} data-scroll-section='true'>
      <Head>
        <title>Home | Set Brain</title>
      </Head>
      {isMobile ? (
        <>
          <Model
            model={'/tv.gltf'}
            size={{ height: '20%', width: '25%', z: -4 }}
            position={{ left: '20%', top: '20%' }}
            rotation={{ x: -0.2, y: 0.2, z: 0.2 }}
          ></Model>
          <Model
            model={'/rocket.gltf'}
            size={{ height: '45%', width: '40%', z: -8 }}
            position={{ left: '55%', top: '0%' }}
            rotation={{ x: -0.3, y: -0.2, z: 0.2 }}
          ></Model>
          <Model
            model={'/leaf.gltf'}
            size={{ height: '50.6%', width: '65%', z: -12 }}
            position={{ left: '0%', top: '40%' }}
            rotation={{ x: -0.3, y: 0.5, z: -0.1 }}
          ></Model>
          <Model
            model={'/lamp.gltf'}
            size={{ height: '50.6%', width: '40%', z: -12 }}
            position={{ left: '52%', top: '55%' }}
            rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
          ></Model>
          <Model
            model={'/pc.gltf'}
            size={{ height: '45%', width: '35%', z: -9 }}
            position={{ left: '5%', top: '-10%' }}
            rotation={{ x: -0.2, y: 0.1, z: 0.3 }}
          ></Model>
        </>
      ) : (
        <>
          <Model
            model={'/tv.gltf'}
            size={{ height: '45%', width: '20%', z: -3 }}
            position={{ left: '5%', top: '40%' }}
            rotation={{ x: -0.2, y: 0.2, z: 0 }}
            scrollSpeed={1}
          ></Model>
          <Model
            model={'/rocket.gltf'}
            size={{ height: '45%', width: '14.88%', z: -5 }}
            position={{ left: '70%', top: '0%' }}
            rotation={{ x: -0.3, y: 0.2, z: 0.2 }}
            scrollSpeed={1}
          ></Model>
          <Model
            model={'/leaf.gltf'}
            size={{ height: '50.6%', width: '16.7%', z: -6.5 }}
            position={{ left: '40%', top: '50%' }}
            rotation={{ x: -0.5, y: -0.5, z: -0.8 }}
            scrollSpeed={1}
          ></Model>
          <Model
            model={'/lamp.gltf'}
            size={{ height: '50.6%', width: '16.7%', z: -6 }}
            position={{ left: '75%', top: '40%' }}
            rotation={{ x: -0.3, y: -0.2, z: -0.2 }}
            scrollSpeed={3}
          ></Model>
          <Model
            model={'/pc.gltf'}
            size={{ height: '45%', width: '18%', z: -3 }}
            position={{ left: '12%', top: '5%' }}
            rotation={{ x: -0.2, y: 0.1, z: 0.3 }}
            scrollSpeed={2.5}
          ></Model>
        </>
      )}
      <BigTitle position='center' margin='-10.25vw' isMobile={isMobile} data-scroll-section>
        <h1>Set Brain</h1>
        <h1>
          <span>Créons l&#39;impossible</span>
        </h1>
      </BigTitle>
    </div>
  );
}

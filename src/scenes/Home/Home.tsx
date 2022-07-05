import React from 'react';
import BigTitle from '../../components/big-title/big-title';

export type HomeProps = {
  path: string;
};

export default function Home({}: HomeProps) {
  return (
    <div className='Home'>
      <BigTitle position='center' data-scroll-section>
        <h1>Set Brain</h1>
        <h1>
          <span>Créons l&#39;impossible</span>
        </h1>
      </BigTitle>
    </div>
  );
}

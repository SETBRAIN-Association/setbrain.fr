import React from 'react';
import './_About.scss';
import BigTitle from '../../components/big-title/big-title';

export type AboutProps = {
  path: string;
};

export const About = ({}: AboutProps) => {
  return (
    <div className='About'>
      <BigTitle position='left' data-scroll-section>
        <h1>
          <span>Qui sommes nous ?</span>
        </h1>
      </BigTitle>
    </div>
  );
};

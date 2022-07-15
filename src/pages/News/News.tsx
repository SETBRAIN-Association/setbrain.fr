import React from 'react';
import './_News.scss';
import BigTitle from '../../components/big-title/big-title';

export type NewsProps = {
  path: string;
};

export const News = ({}: NewsProps) => {
  return (
    <div className='News' data-scroll-section>
      <BigTitle position='left'>
        <h1>
          <span>Nos actualités</span>
        </h1>
      </BigTitle>
    </div>
  );
};

import React from 'react';
import styles from './_article-card.module.scss';
import { Article } from '../../types/Article';
import Image from 'next/image';
import { convertToDateString } from '../../utils/time';

export type ArticleCardProps = {
  article: Article
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className={styles['article-card']}>
        <div className={styles['image']}>
          <Image src={article.image} layout='fill' objectFit='cover'></Image>
        </div>
        <div className={styles['texts']}>
          <span>{convertToDateString(article.date)}</span>
          <h1>{article.title}</h1>
          <p>{article.description}</p>
        </div>
    </div>
  );
};

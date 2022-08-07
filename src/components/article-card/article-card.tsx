import React from 'react';
import styles from './_article-card.module.scss';
import { Article } from '../../types/Article';
import Image from 'next/image';
import { convertToDateString } from '../../utils/time';
import Link from 'next/link';

export type ArticleCardProps = {
  article: Article
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <div className={styles['article-card']} data-scroll='true' data-scroll-speed='1'>
      <div className={styles['image']}>
        <Image src={article.image} layout='fill' objectFit='cover'></Image>
      </div>
      <div className={styles['texts']}>
        <span>{convertToDateString(article.date)}</span>
        <Link href={'news/' + article._id}>
          <h1>{article.title}</h1>
        </Link>
        <p>{article.description}</p>
      </div>
    </div>
  );
};

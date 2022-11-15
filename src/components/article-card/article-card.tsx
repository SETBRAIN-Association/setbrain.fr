import React, { useEffect, useState } from 'react';
import styles from './_article-card.module.scss';
import { Article } from '../../types/Article';
import Image from 'next/image';
import { convertToDateString } from '../../utils/time';
import Link from 'next/link';
import { useRouter } from 'next/router';

export type ArticleCardProps = {
  article: Article;
};

export const ArticleCard = ({ article }: ArticleCardProps) => {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    });
  });

  const redirectToArticle = (event: any): any => {
    event.preventDefault();
    router.push('news/' + article._id);
  };

  return (
    <div
      className={styles['article-card']}
      data-scroll='true'
      data-scroll-speed='1'
      onClick={isMobile ? redirectToArticle : undefined}
    >
      <div className={styles['image']} onClick={redirectToArticle}>
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

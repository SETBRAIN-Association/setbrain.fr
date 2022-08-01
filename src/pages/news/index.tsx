import React from 'react';
import styles from './_News.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { Article } from '../../types/Article';
import Image from 'next/image';
import { convertToDateString } from '../../utils/time';
import { ArticleCard } from '../../components/article-card/article-card';

export type NewsProps = {
  articles: Article[];
};

export default function News({ articles }: NewsProps) {
  return (
    <div className={styles['News']} data-scroll-section>
      <BigTitle position='left'>
        <h1>
          <span>Nos actualités</span>
        </h1>
      </BigTitle>
      <div className={styles['last-article']}>
        <div className={styles['image']}>
          <Image src={articles[0].image} layout='fill'></Image>
        </div>
        <div className={styles['texts']}>
          <span>{convertToDateString(articles[0].date)}</span>
          <h1>{articles[0].title}</h1>
          <p>{articles[0].description}</p>
        </div>
      </div>

      <div className={styles['articles']}>
        {articles.map(article => (
          <ArticleCard key={article._id} article={article}></ArticleCard>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetch('http://localhost:3000/api/articles');
  const json = await data.json();
  const articles = json.articles;

  return {
    props: {
      articles: articles,
    },
  };
}

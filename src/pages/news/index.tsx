import styles from './_News.module.scss';
import BigTitle from '../../components/big-title/big-title';
import { Article } from '../../types/Article';
import Image from 'next/image';
import { convertToDateString } from '../../utils/time';
import { ArticleCard } from '../../components/article-card/article-card';
import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export type NewsProps = {
  articles: Article[];
};

export default function News({ articles }: NewsProps) {
  const router = useRouter();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) setIsMobile(true);

    window.addEventListener('resize', () => {
      if (window.innerWidth < 768) setIsMobile(true);
      else setIsMobile(false);
    });
  });

  const redirectToLastArticle = (event: any): any => {
    event.preventDefault();
    router.push('news/' + articles[0]._id);
  };

  return (
    <div className={styles['News']} data-scroll-section='true'>
      <Head>
        <title>Actualités | Set Brain</title>
      </Head>
      <BigTitle position='left'>
        <h1>
          <span>Nos actualités</span>
        </h1>
      </BigTitle>

      <div
        className={styles['last-article']}
        data-scroll='true'
        data-scroll-speed='0.5'
        onClick={isMobile ? redirectToLastArticle : undefined}
      >
        <div className={styles['image']} onClick={redirectToLastArticle}>
          <Image src={articles[0].image} layout='fill' objectFit='cover'></Image>
        </div>
        <div className={styles['texts']}>
          <span>{convertToDateString(articles[0].date)}</span>
          <Link href={'news/' + articles[0]._id}>
            <h1>{articles[0].title}</h1>
          </Link>
          <p>{articles[0].description}</p>
        </div>
      </div>

      <div className={styles['articles']}>
        {articles.map((article) => (
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

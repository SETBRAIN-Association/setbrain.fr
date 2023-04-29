import { Article } from '../../types/Article';
import { GetServerSidePropsContext } from 'next';
import styles from './_ArticleView.module.scss';
import { convertToDateString } from '../../utils/time';
import Blocks, { RenderFn } from 'editorjs-blocks-react-renderer';
import Image from 'next/image';
import Head from 'next/head';
import { getEnvironmentURI } from '../../utils/environment';

export type ArticleViewProps = {
  article: Article;
};

export type ImageBlockProps = {
  url: string;
  description: string;
};

const ImageBlock: RenderFn<ImageBlockProps> = ({ data }: { data: ImageBlockProps }) => {
  return (
    <div className={styles['image-wrapper']}>
      <div className={styles['image']}>
        <Image src={data.url} layout='fill'></Image>
      </div>
      <p>{data.description ?? ''}</p>
    </div>
  );
};

export default function ArticleView({ article }: ArticleViewProps) {
  return (
    <div className={styles['article-view']} data-scroll-section='true'>
      <Head>
        <title>{article.title}</title>
      </Head>
      <div className={styles['top-infos']}>
        <h1 className={styles['title']}>{article.title}</h1>
        <span className={styles['date']}>{convertToDateString(article.date)} &nbsp;-&nbsp; par l&apos;équipe de Setbrain</span>
      </div>
      <div className={styles['content']}>
        <Blocks
          data={article.file}
          renderers={{
            image: ImageBlock,
          }}
        ></Blocks>
      </div>
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const data = await fetch(getEnvironmentURI() + '/api/articles/' + id);
  const article = await data.json();

  return {
    props: {
      article: article,
    },
  };
}

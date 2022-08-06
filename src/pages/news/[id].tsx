import { Article } from '../../types/Article';
import { GetServerSidePropsContext } from 'next';
import styles from './_ArticleView.module.scss';
import { convertToDateString } from '../../utils/time';
import Blocks, { RenderFn } from 'editorjs-blocks-react-renderer';
import Image from 'next/image';

export type ArticleViewProps = {
  article: Article
};

export type ImageBlockProps = {
  file: {url: string}
};

const ImageBlock: RenderFn<ImageBlockProps> = ({data}: {data: ImageBlockProps}) => {
  return (
    <div className={styles['image']}><Image src={data.file.url} layout='fill'></Image></div>
  );
};

export default function ArticleView({ article } : ArticleViewProps) {



  return (<div className={styles['article-view']}>
    <div className={styles['top-infos']}>
      <h1 className={styles['title']}>{article.title}</h1>
      <span className={styles['date']}>{convertToDateString(article.date)}</span>
    </div>
    <div className={styles['content']}>
      <Blocks data={article.file} renderers={{
        image:
        ImageBlock
      }}></Blocks>
    </div>
  </div>);
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const { id } = context.query;
  const data = await fetch('http://localhost:3000/api/articles/' + id);
  const article = await data.json();

  return {
    props: {
      article: article,
    },
  };
}

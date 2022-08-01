import { useRouter } from 'next/router';
import { Article } from '../../types/Article';
import { GetServerSidePropsContext } from "next";

export type ArticleViewProps = {
  article: Article
};

export default function ArticleView({ article } : ArticleViewProps) {
  return (<div>{JSON.stringify(article.file)}</div>);
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

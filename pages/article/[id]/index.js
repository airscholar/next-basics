import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { server } from '../../../config';
import Meta from '../../../components/Meta';

const Article = ({ article }) => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div>
      <Meta title={article.title} description={article.description} />
      <h1>{article.title}</h1>
      <div>{article.body}</div>
      <br />
      <Link href='/'>Go Back</Link>
    </div>
  );
};

export const getStaticProps = async context => {
  const res = await (await fetch(`${server}/api/articles/${context.params.id}`)).json();

  return {
    props: {
      article: res,
    },
  };
};

export const getStaticPaths = async () => {
  const articles = await (await fetch(`${server}/api/articles`)).json();

  const ids = articles.map(article => article.id);
  const paths = ids.map(id => ({
    params: {
      id: id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export default Article;

import Head from 'next/head';
import ArticleList from '../components/ArticleList';
import { server } from '../config';
// import Image from 'next/image';
// import styles from '../styles/Home.module.css';

const Home = ({ articles }) => {
  return (
    <div>
      <ArticleList articles={articles}></ArticleList>
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const res = await (await fetch(`${server}/api/articles`)).json();

  return {
    props: {
      articles: res,
    },
  };
};
// export const getStaticProps = async () => {
//   const res = await (await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)).json();

//   return {
//     props: {
//       articles: res,
//     },
//   };
// };

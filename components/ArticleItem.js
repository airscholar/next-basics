import Link from 'next/link';
import artcleStyles from '../styles/Article.module.css';

const ArticleItem = ({ article }) => {
  return (
    <Link href='/article/{id}' as={`/article/${article.id}`}>
      <div className={artcleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.body}</p>
      </div>
    </Link>
  );
};

export default ArticleItem;

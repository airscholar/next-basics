import articleStyles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map(article => (
        <h3 key={article.id}>
          <ArticleItem article={article}></ArticleItem>
        </h3>
      ))}
    </div>
  );
};

export default ArticleList;

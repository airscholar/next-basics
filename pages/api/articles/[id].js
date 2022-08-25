import { articles } from '../../../data';

const handler = ({ query: { id } }, res) => {
  const filtered = articles.filter(article => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.json(404).json({ message: `${id} not found` });
  }
};

export default handler;

import { useEffect, useState } from 'react';
import ArticleCard from '../components/ArticleCard';
import styles from '../styles/ArticlesPage.module.css';
import axios from 'axios';

const ArticlesPage = ({ articles }) => {
  const [blogs, setBlogs] = useState(null)
  useEffect(()=>{
   const getPost =async ()=>{
     try {
      const res = await axios.get('https://funel.onrender.com/api/blog/get');
      console.log(res.data)
    } catch (error) {
      console.error('Failed to fetch articles:', error);
    
    }
  }
  getPost();
  }, [])
  return (
    <>
      <h3>
        Recent Posts from{' '}
        <a
          href="#"
          target="_blank"
          rel="noopener"
          className={styles.underline}
        >
          me
        </a>
      </h3>
      <div className={styles.container}>
        {articles? articles.map((article) => (
          <ArticleCard key={article.indexOf} article={article} />
        ) ) : null}
      </div>
    </>
  );
};


export default ArticlesPage;

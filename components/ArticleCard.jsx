import Image from 'next/image';
import EyeIcon from '../components/icons/EyeIcon';
import HeartIcon from '../components/icons/HeartIcon';
import CommentIcon from '../components/icons/CommentIcon';
import styles from '../styles/ArticleCard.module.css';

const ArticleCard = ({ article }) => {
  return (
    <a
      href={article.title}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.container}
    >
      {article.image? <Image
        src={article.image}
        alt={article.title}
        width={300}
        height={150}
      />: null}
      <div className={styles.content}>
        <h3 className={styles.title}>{article.title}</h3>
        <p>{article.content}</p>
      </div>
      <div className={styles.stats}>
        <div className={styles.stat}>
          <EyeIcon className={styles.icon} /> {article.read}
        </div>
        {/* <div className={styles.stat}>
          <HeartIcon className={styles.icon} /> {article.public_reactions_count}
        </div>
        <div className={styles.stat}>
          <CommentIcon className={styles.icon} /> {article.comments_count}
        </div> */}
      </div>
    </a>
  );
};

export default ArticleCard;

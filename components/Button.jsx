import Link from 'next/link';

import styles from '../styles/Button.module.css';

const Button = ({refPage, title}) => {
  return (
    <>
        <Link href={`${refPage}`}>
              <button className={styles.button}>{title}</button>
        </Link>
    </>
  );
};

export default Button;

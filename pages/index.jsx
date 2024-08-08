import Link from 'next/link';
import Illustration from '../components/Illustration';
import styles from '../styles/HomePage.module.css';

export default function HomePage() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.background}>
          <h1>I BUILD</h1>
          <h1>SOLUTIONS</h1>
        </div>
        <div className={styles.foreground}>
          <div className={styles.content}>
            <h1 className={styles.name}>Emmanuel Adura Ibitoye</h1>
            <h6 className={styles.bio}>Full Stack Mobile App, Web2 & Web3/Block-Chain Developer</h6>
            <div>
            <Link href="/projects">
              <button className={styles.button}>View Work</button>
            </Link>
            </div>
            <div>
            <Link href="/contact">
              <button className={styles.outlined}>Contact Me</button>
            </Link>
            </div>
          </div>
         
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  return {
    props: { title: 'Home' },
  };
}

import styles from '../styles/Header.module.css'
import Button from './Button';

function Header() {
	return (
		<div
			id='Header'
			className={styles.headercontainer}
		>
			<div className={styles.name}>
				<code className={styles.hi}>Hi, my name is</code>
				<code className={styles.my}>
					Emmanuel Adura Ibitoye
				</code>
				<code className={styles.hi}>
					you can call me codegien. Welcome!
				</code>
			</div>
            <Button refPage="/" title="Check out my Work!"/>
		
		</div>
	);
}

export async function getStaticProps() {
    return {
      props: { title: 'Header' },
    };
  }

export default Header;
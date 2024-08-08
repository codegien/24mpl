import Image from 'next/image';
import styles from '../styles/Logosc.module.css';

const LogoSC = ({logoname, logosrc}) => {
  return (
    <div className={styles.logo_wrapper}>
							<Image
								src={logosrc}
								alt={logoname}
								className={styles.logoscm}
							/>
							<code className={styles.logoname}>{logoname}</code>
						</div>
  );
};

export default LogoSC;
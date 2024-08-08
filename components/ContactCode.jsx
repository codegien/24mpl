import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'codegienuel.com',
    href: 'https://codegienuel.com',
  },
  {
    social: 'email',
    link: 'codegienuel@gmail.com',
    href: 'mailto:codegienuel@gmail.com',
  },
  {
    social: 'github',
    link: 'codegien',
    href: 'https://github.com/codegien',
  },
  {
    social: 'linkedin',
    link: 'codegien',
    href: 'https://www.linkedin.com/in/emmanuel-adura-ibitoye/',
  },
  {
    social: 'X',
    link: 'codigien',
    href: 'https://www.twitter.com/codegien1',
  },
  {
    social: 'instagram',
    link: 'codegien',
    href: 'https://www.instagram.com/codegien',
  },
  {
    social: 'telegram',
    link: 'codegien',
    href: 'https://t.me/codegien',
  }
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

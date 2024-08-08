import IdIcon from "../components/icons/IdIcon";
import Button from "../components/Button";
import styles from '../styles/About.module.css';
import Header from "../components/Header";
import AboutContent from "../components/AboutContent";
const AboutPage = () => {
  return (
      <>
      
      <Header/> 
      <AboutContent/>
      </>
    

  );
};


export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;


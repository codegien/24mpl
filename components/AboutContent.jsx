import styles from '../styles/Header.module.css'
import Button from './Button';
import LogoSC from './LogoSC';
import Resume from './Resumepage';
import IdIcon from './icons/IdIcon';
import Image from 'next/image';

const PythonLogo = require('../assets/images/logos/PythonLogo.png');
const ReactLogo = require('../assets/images/logos/ReactLogo.png');
const TypescriptLogo = require('../assets/images/logos/TypescriptLogo.png');
const JsLogo = require('../assets/images/logos/JsLogo.png');
const NextLogo = require('../assets/images/logos/NextLogo.png');
const TailwindLogo = require('../assets/images/logos/TailwindLogo.png');
const SqlLogo = require('../assets/images/logos/SqlLogo.png');
const ReduxLogo = require('../assets/images/logos/ReduxLogo.png');
const FirebaseLogo = require('../assets/images/logos/FirebaseLogo.png');
const MongoDBLogo = require('../assets/images/logos/MongoDBLogo.png');
const NodeJSLogo = require('../assets/images/logos/NodeJSLogo.png');
const DockerLogo = require('../assets/images/logos/DockerLogo.png');
const HTML5Logo = require('../assets/images/logos/HTML-5.png');
const CSSLogo = require('../assets/images/logos/CSS.png');
const BootstrapLogo = require('../assets/images/logos/BootstrapLogo.png');
const GitLogo = require('../assets/images/logos/GitLogo.png');
const JiraLogo = require('../assets/images/logos/Jira.png');
const JestLogo = require('../assets/images/logos/Jest.png');
const NpmLogo = require('../assets/images/logos/NpmLogoRed.png');
const TerminalLogo = require('../assets/images/logos/Terminal.png');

const logos =[
	{name: "HTML 5", src: HTML5Logo},
	{name: "CSS", src: CSSLogo},
	{name: "JavaScript (ES6+)", src: JsLogo},
	{name: "R-Bootstrap", src: BootstrapLogo},
	{name: "React", src: ReactLogo},
	{name: "React Native", src: ReactLogo},
	{name: "Next.js", src: NextLogo},
	{name: "Git", src: GitLogo},
	{name: "Jira Atlassian", src: JiraLogo},
	{name: "Jest", src: JestLogo},
	{name: "TypeScript", src: TypescriptLogo},
	{name: "Tailwind CSS", src: TailwindLogo},
	{name: "Redux", src: ReduxLogo},
	{name: "npm", src: NpmLogo},
	{name: "Python", src: PythonLogo},
	{name: "Terminal", src: TerminalLogo},
	{name: "Firebase", src: FirebaseLogo},
	{name: "Node.js", src: NodeJSLogo},
	{name: "SQL", src: SqlLogo},
	{name: "MongoDB", src: MongoDBLogo},
	{name: "Docker", src: DockerLogo},
];



function AboutContent() {
	return (
		<div
			id='About'
			className= {styles.container}
		>
			<div>
				<div className= {styles.table}>
					<IdIcon/>
					<code className= {styles.abt}>
						About Me
					</code>
					<div className= {styles.underline}></div>
				</div>
				<div >
					<code className={styles.summary}>
						Senior Designer, Senior Fullstack Web/Mobile App developer based in Lagos, Nigeria. I have
						4+ years experience in Web/Mobile App development with over 7 years experience accross diverse
						industries. Equipped with a record of success in consistently
						identifying and providing the technological needs of companies
						through ingenious innovation. Proficient in developing databases,
						Creating user interfaces, writing and test codes,
						solving/troubleshooting simple/complex issues and implementing new
						features based on user feedback.
					</code>
					<br />
					<br />
					<code className={styles.summary}>
						I am proficient with the below programming Languages, Libraries,
						Tools and Frame Works:
					</code>
					<div className={styles.techstack}>
						
						{logos.map((logo)=>(
							<LogoSC key={logo.name} logoname={logo.name} logosrc={logo.src}/>
						))}
						
					</div>
					<Resume/>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
    return {
      props: { title: 'About Header' },
    };
  }

export default AboutContent;
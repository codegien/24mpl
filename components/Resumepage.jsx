import styles from '../styles/Resume.module.css'
import Button from './Button';
import LogoSC from './LogoSC';
import ClipBoardIcon from './icons/Clipboardicon';
import IdIcon from './icons/IdIcon';
import Image from 'next/image';




function Resume() {
	return (
		<div
			id='Resume'
			className={""}
		>
			<div>
				<div className={styles.table}>
					{/* <ClipboardListIcon className='h-5 w-5 mr-4 text-yellow_vs' /> */}
					<ClipBoardIcon/>

					<code className={styles.abt}>
						Resume
					</code>
					<div className={styles.underline}></div>
				</div>
			</div>
			<div className={styles.summary}>
				<div className= {styles.reslayout2}>
					<div className={styles. tab}>
						<code className={styles.tag}>Technical Skills</code>
					</div>
					<div className={styles.maintab}>
						<code className={styles.role}>Skills Includes:</code>
						<br />
						<code className={styles.company}>
							but not limited to
						</code>
						<code className='text-sm'>
							<br />• <span className={styles.duration}>Languages:</span> Java, JavaScript, TypeScript, Solidity, Python, Node.js, SQL, Shell Scripting.
							<br />• <span className={styles.duration}>Front-End:</span> React, React Native, Expo, HTML5, CSS3, Tailwind, Material UI, Styled Component, Chackra, React Bootstrap, SASS.
							<br />• <span className={styles.duration}>Back-End:</span> Node.js, Express, Django, Spring Boot.
							<br />• <span className={styles.duration}>Databases:</span> MongoDB PostgreSQL, SQLite, Realm, MySQL, Radis, Fire Base.
							<br />• <span className={styles.duration}>System Design:</span> Microservices, Event-Driven Architecture, RESTful APIs, GraphQL.
							<br />• <span className={styles.duration}>Cloud Platforms:</span> AWS, Google Cloud Platform
							<br />• <span className={styles.duration}>CI/CD:</span> Jenkins, Fastlane, GitHub Actions
							<br />• <span className={styles.duration}>Monitoring & Logging:</span>  Prometheus, Grafana, ELK Stack (Elasticsearch, Logstash, Kibana)
							<br />• <span className={styles.duration}>Version Control:</span> Git, GitHub, GitLab, Bitbucket
							<br />• <span className={styles.duration}>Testing:</span> Jest, React Testing Library, Espresso, Appium, Charles Proxy
							<br />• <span className={styles.duration}>Development Tools:</span> Xcode, Android Studio, sound box, VSCode
							<br />• <span className={styles.duration}>Design Tools:</span> Figma, illustrator, Photoshop
							<br /> 				
						</code>
						<div className={styles.spacer}></div>
					</div>
				</div>
				<div className= {styles.reslayout}>
					<div className={styles.tab}>
						<code className={styles.tag}>Work</code>
					</div>
					<div className={styles.maintab}>
						<code className={styles.role}>Software Engineering Course Creator</code>
						<br />
						<code className={styles.company}>
							3MTT - Alt_School Africa.
						</code>
						<br />
						<code className={styles.duration}>• Dec 2023 - Present</code>
						<br />
						<code className='text-sm'>
							<br />• Developed and launched 5 beginner friendly and 3 advanced software development courses, boosting course enrollment by 40% and reaching over 1,000 global learners.
							<br />• Mentored 15 junior developers, 3 of them won 1st and 2nd place Best in the West Region Software Exhibition Hackaton in Lagos, leading to awards including laptops and ₦1,000,000 cash prize from the Federal Government.
							<br />
							• Enhanced course engagement by 30%, contributing to a 25% increase in annual revenue for the educational platform.
							<br />Improved course satisfaction to 95% through iterative updates based on learner feedback and performance metrics.
							<br />• Developed and integrated an AI assisted learning evaluation system that automatically verifies code solution compliance with exercises specifications there by reducing learning progress evaluation and performance time by 60%. 
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>Fullstack Web & Mobile Apps Developer</code>
						<br />
						<code className={styles.company}>ITSkills Centre</code>
						<br />
						<code className={styles.duration}>• Nov 2021 - Present</code>
						<br />
						<code className='text-sm'>
							<br />• Developed banking solution, bills/Utility payment app, eCommerce/logistics app, estate management app and government agency solution.
							<br />• Improved application load times by 30% through code optimization and database query enhancements leading to a 20% reduction in bounce rates and a better overall user experience.
							<br />• Introduced AI-powered chatbots and virtual assistants to assist users with policy inquiries and claim status, reducing customer service response time by 40% and improving user satisfaction.
							<br />
							• Configured and implemented tailored system designs, traffic requests/response load balancing model supporting high concurrency and reducing latency by 30% and about 65% cost saving.
							<br />
							• Designed and implemented scalable architecture to handle a 50% increase in user traffic by  for the mobile banking application, ensuring uninterrupted service during peak times.
							<br />• Implemented robust data encryption and security measures in compliance with industry regulations (GDPR, HIPAA), ensuring the protection of sensitive user information and achieving a 100% compliance rating during audits.
							<br />• Achieved a 40% reduction in critical bugs through improved testing protocols and proactive code reviews, enhancing application stability.
							<br/>• Architected and implemented a microservices-based backend for a high-traffic banking application, resulting in a 40% reduction in transaction processing times and improved system resilience.
							<br />• Shortened the development cycle for new features by 20% by prioritizing CI/CD best practices, leading to faster time-to-market and improved client satisfaction.
							<br />• Implemented advanced security protocols that reduced application vulnerabilities by 35%, ensuring compliance with industry standards.
							<br/>• Led the migration of legacy systems to a cloud-native architecture on AWS, utilizing Docker and Kubernetes for containerization and orchestration.
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>Front End Web & Mobile Apps Developer</code>
						<br />
						<code className={styles.company}>Eatup Ng</code>
						<br />
						<code className={styles.duration}>• Feb - Dec 2023 </code>
						<br />
						<code className='text-sm'>
							<br />• Developed a restaurant management system, including order processing and inventory management, resulting in a 20% increase in operational efficiency.
							<br />• Contributed to the development of B2C supply chain management feature, optimizing route planning algorithms and reducing delivery times by 15%.
							<br />
							Enhanced user experience through responsive design improvements, increasing user engagement by 25%.
							<br />Participated in code reviews and provided mentorship to junior developers, fostering a collaborative team environment.
							<br />• Optimized front-end performance through code splitting, lazy loading, and other performance techniques, resulting in a 50% decrease in load times.
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>IOS/Android Mobile App Developer</code>
						<br />
						<code className={styles.company}>Evolance Technologies, Texas, U.S.A</code>
						<br />
						<code className={styles.duration}>• Sept 2020 - Nov 2021</code>
						<br />
						<code className='text-sm'>
							<br />• Developed and maintained a comprehensive restaurant management app for iOS and Android, including features for crude product reservations, order management, and real-time notifications..
							<br />• Implemented push notifications and in-app messaging, boosting user engagement by 35%.
							<br />
							• Achieved a 50% reduction in bug reports through rigorous testing and code review practices.
							<br />• Increased app store ratings by 4.5 stars through enhancements in usability and performance.
							<br />• Successfully integrated a new payment gateway, improving transaction processing speed and reliability.
							<br />• Implemented intuitive navigation and interactive features, leading to a 30% decrease in user drop-off rates and a 20% improvement in user engagement.
							<br />• Performed beta testing with Testflight and Adroid Beta
							Channel Release.
							<br />• Reduced infrastructure costs by 20% through efficient resource allocation and auto-scaling configurations.
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>Back End & System Design Engineer</code>
						<br />
						<code className={styles.company}>Freelance</code>
						<br />
						<code className={styles.duration}>• Feb 2019- Present</code>
						<br />
						<code className='text-sm'>
							<br />• Architected and implemented a microservices-based backend for a high-traffic "LifeStyle" application, resulting in a 45% reduction in request processing times and improved system resilience.
							<br />• Optimised code application and code run-time for better
							performance on mobile devices.
							<br />
							• Designed and deployed scalable API solutions for an eCommerce platform, supporting high concurrency and reducing latency by 30%.
							<br />• Improved API performance by 60% through optimized database queries and caching strategies.
							<br />• Optimized data storage and retrieval for a logistics application, improving query performance by 25% and reducing storage costs.
							<br />• Led the migration of legacy systems to a cloud-native architecture on AWS, utilizing Docker and Kubernetes for containerization and orchestration.
							<br />• Improved system throughput by optimizing backend algorithms and database indexing.
							<br />• Played a key role in the transition to a microservices architecture, enhancing modularity and maintainability.
							<br/>• Designed and integrated a comprehensive user authentication system with multi-factor authentication (MFA), enhancing the security of user accounts and reducing unauthorized access by 45%.
							
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>Fullstack Web & Mobile Apps Developer</code>
						<br />
						<code className={styles.company}>Eclipse Technologies </code>
						<br />
						<code className={styles.duration}>• March 2021 - June 2022</code>
						<br />
						<code className='text-sm'>
							<br />• Revamped the user interface of the insurance management app, resulting in a 40% increase in user satisfaction, a 25% reduction in user onboarding time and over 100 downloads hourly after revamped version release to app store.
							<br />• Enhanced the quote generation system, improving the speed and accuracy of insurance quotes, leading to a 25% increase in user conversion to policy purchase.
							<br />
							• Developed and integrated a streamlined claims submission process, which resulted in a 35% increase in claim processing efficiency and a 20% boost in overall conversion rates.
							<br />• Introduced AI-powered chatbots and virtual assistants to assist users with policy inquiries and claim status, reducing customer service response time by 40% and improving user satisfaction.
							<br />• Developed and maintained a consistent user experience across web and mobile platforms, ensuring seamless integration and functionality, which resulted in a 20% increase in cross-platform user retention.
							<br />• Performed beta testing with Testflight and Adroid Beta
							Channel Release.
							<br />• Implemented responsive design principles to ensure optimal usability on various devices and screen sizes, leading to a 15% increase in mobile app usage.
						</code>
					</div>
				</div>
				
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>UI/UX desiger and Front End Mobile Developer</code>
						<br />
						<code className={styles.company}>Freelance</code>
						<br />
						<code className={styles.duration}>• Jan 2017 - Dec 2018</code>
						<br />
						<code className='text-sm'>
							<br />• Designed and contributed to the development of e-Learning mobile
							application.
							<br />• Implemented responsive design principles to ensure optimal usability on various devices and screen sizes, leading to a  increase in mobile app usage.
							<br />
							• Collaborated with senior developers and designers to deliver features and resolve bugs, adhering to best practices and project requirements.
						</code>
					</div>
				</div>
				
				{/* <div className={styles.reslayout2}>
					<div className={styles.tab}>
						<code className={styles.tag}>Tools</code>
					</div>
					<div className={styles.maintab}>
						<code className={styles.role}>Expert With:</code>
						<br />

						<code className='text-sm'>
							<br />• HTML, XML, CSS, JavaScript, TypeScript|flow. Python, JSX,
							Expo, SVGR.NOW.SH.,
							<br />• CSS, Sass, Tailwind, Bootstrap.
							<br />• Reactjs, React Native, Radux, NodeJS.
							<br />• Django, MongoDB, MySQL, SQLite, Postgres, SSH, HTTP/HTTPS,
							.net.
							<br />• Git, Terminal, CLI, VScode, Xcode, Android Studio, Expo.
						</code>
					</div>
				</div> */}
				<div className={styles.reslayout2}>
					<div className={styles.tab}>
						<code className={styles.tag}>Education</code>
					</div>
					<div className={styles.maintab}>
						<code className={styles.role}>
							JavaScript Algorithms and Data Structure
						</code>
						<br />
						<code className={styles.company}>
							FreeCodeCamp.
						</code>
						<br />
						<code className={styles.duration}>
							• Nov. 2019 - July 2020.
						</code>
						<br />
						<code className='text-sm'>
							<br />• Regular Expression.
							<br />• Debugging.
							<br />• Algorithm Scripting.
							<br />• Objected Orinted Programming (OOP).
							<br />• Functional Programming.
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.maintab}>
						<code className={styles.role}>Responsive Web Design</code>
						<br />
						<code className={styles.company}>
							FreeCodeCamp.
						</code>
						<br />
						<code className={styles.duration}>
							• Oct. 2020 - Sept. 2021
						</code>
						<br />
						<code className='text-sm'>
							<br />• Cross Platform Responsiveness.
							<br />• Memory Management.
							<br />• User Interface Interraction.
							<br />• Tribute Site.
							<br />• Technical Documentation.
						</code>
					</div>
				</div>
				<div className={styles.reslayout2}>
					<div className={styles.tab}></div>
					<div className={styles.main}>
						<code className={styles.role}>Bachelor of Science</code>
						<br />
						<code className={styles.company}>
							University of Ilorin, Ilorin, Nigeria.
						</code>
						<br />
						<code className={styles.duration}>
							• Oct. 2016 - Sept. 2021
						</code>
						<br />
						<code className='text-sm'>
							<br />• Bio-genetics and Genetic Engineering
							<br />• Forensic Biochemistry
							<br />• Drug Action Mechanism
							<br />• Nutritional Biochemistry.
						</code>
					</div>
				</div>
			</div>
		</div>
	);
}

export async function getStaticProps() {
    return {
      props: { title: 'Resume' },
    };
  }

export default Resume;
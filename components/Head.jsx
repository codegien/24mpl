import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Emmanuel Adura is an Senior full stack web/mobile/block chain developer building websites, applications, smart-contracts, solutions, microservices and server side scriptings you'd love to use"
      />
      <meta
        name="keywords"
        content="Emmanuel Adura, Ibitoye, web developer portfolio, Emmanuel Adura web developer, fullstack developer, mern stack, web2/web3  portfolio, Backend Engineer, smart contract developer"
      />
      <meta property="og:title" content="Emmanuel Adura's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" />
      <meta property="og:url" content="https://vscode-portfolio.vercel.app" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Emmanuel Adura Ibitoye', 
};

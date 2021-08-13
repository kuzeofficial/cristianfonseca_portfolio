import '../styles/index.css';
import Head from 'next/head';

type MyAppProps = {
  Component: any;
  pageProps: Object;
}
export default function MyApp({ Component, pageProps } : MyAppProps) {
  return (
    <>
      <Head>
        <title>Cristian Fonseca - Web Developer</title>
        <meta name="description" content="Full-stack web developer"/>
        <meta property="og:title" content="Cristian Fonseca"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:url" content="https://www.cristianfonseca.com" key="ogurl" />
        <meta property="og:image" content="/images/logo2.webp" key="ogimage" />
        <meta property="og:site_name" content="Cristian Fonseca" key="ogsitename" />
        <meta property="og:description" content="Full-stack web developer" key="ogdesc" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}


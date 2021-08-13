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
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="cristianfonseca.com" />
        <meta name="twitter:title" content="Cristian Fonseca" />
        <meta name="twitter:description" content="A young developer web full-stack from Cuba" />
        <meta name="twitter:image" content="https://www.cristianfonseca.com/images/logo2.webp" />
        <title>Cristian Fonseca</title>
        <meta name="description" content="A young developer web full-stack from Cuba"/>
        <meta property="og:title" content="Cristian Fonseca"/>
        <link rel="icon" href="/favicon.ico"/>
        <meta property="og:url" content="https://www.cristianfonseca.com" key="ogurl" />
        <meta property="og:image" content="https://www.cristianfonseca.com/images/logo2.webp" key="ogimage" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}


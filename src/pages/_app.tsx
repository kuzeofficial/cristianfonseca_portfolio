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
        <meta property="og:title" content="Cristian Fonseca" key="title" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:image" content="/images/logo.webp" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}


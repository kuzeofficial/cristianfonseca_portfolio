import '../styles/index.css';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Cristian Fonseca - Web Developer</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}


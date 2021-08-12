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
      </Head>
      <Component {...pageProps} />
    </>
  );
}


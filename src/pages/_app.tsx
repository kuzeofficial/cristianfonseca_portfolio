import '../styles/index.css';
import Head from 'next/head';
import "../styles/prism.css";
import { NextSeo } from 'next-seo';

type MyAppProps = {
  Component: any;
  pageProps: Object;
}
export default function MyApp({ Component, pageProps } : MyAppProps) {
  return (
    <>
      <Head>
        <title>Cristian Fonseca - Web Developer</title>
        <meta
          name="description"
          content="A young web developer🤓 passionate about technology💻 and communication🛰️ from Brasil🏝️"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          title: 'Cristian Fonseca',
          description: "A young web developer🤓 passionate about technology💻 and communication🛰️ from Brasil🏝️",
          url: 'https://cristianfonseca.com',
          type: 'profile',
          images: [
            {
              url: "https://cristianfonseca.com/images/logo2.webp",
              width: 600,
              height: 600,
            },
          ],
        }}
      />
      <Component {...pageProps} />
    </>
  );
}


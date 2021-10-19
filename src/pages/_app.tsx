import '../styles/index.css';
import Head from 'next/head';
import "../styles/prism.css";
import {DefaultSeo,NextSeo } from 'next-seo';

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
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.cristianfonseca.com',
          site_name: 'Cristian Fonseca | Web Developer',
        }}
        twitter={{
          handle: '@cristian_devk',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
       <NextSeo
        openGraph={{
          title: 'Cristian Fonseca',
          description: "A young web developer🤓 passionate about technology💻 and communication🛰️ from Brasil🏝️",
          url: 'Web Developer',
          type: 'profile',
          images: [
            {
              url: "https://cristianfonseca.com/images/logo2.png",
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


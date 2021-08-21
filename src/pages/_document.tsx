import Document, { Html, Head, Main, NextScript } from 'next/document';


class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            name="description"
            content="A young developer web full-stack from Cuba"
          />
          <link rel="icon" href="/favicon.ico"/>
          <meta property="og:url" content="https://www.cristianfonseca.com" key="ogurl" />
          <meta property="og:image" content="/images/logo2.webp" key="ogimage" />
          <script async type="text/javascript" src="/js/theme.js"/>
          <link
            rel="preload"
            href="/fonts/inter-var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/rubik-var.ttf"
            as="font"
            type="font/ttf"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="text-base transition-colors duration-300 bg-base">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;

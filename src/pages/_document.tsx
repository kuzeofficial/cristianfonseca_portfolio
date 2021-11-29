import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head>
          <meta
            property="og:url"
            content="https://www.cristianfonseca.com"
            key="ogurl"
          />
          <meta
            property="og:image"
            content="/images/logo2.webp"
            key="ogimage"
          />
          <script async type="text/javascript" src="/js/theme.js" />
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

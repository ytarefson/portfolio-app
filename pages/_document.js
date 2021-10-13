import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="ru">
        <Head>         
          <meta name="format-detection" content="telephone=no" />
          <meta name="theme-color" content="#d8d9d9" />
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
          {/* Manifest Declaration */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    );
  }
}

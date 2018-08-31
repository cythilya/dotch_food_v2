import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="zh">
        <Head>
          <title>吃什麼，どっち</title>
          <meta name="description" content="今天吃飯，該吃什麼好呢？只要輸入美食欲望，立刻給你最真實、現場、生活化的評價，找餐廳再也不煩惱，就讓吃什麼，どっち幫你決定吃什麼！" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <link rel="preconnect" href="https://res.cloudinary.com" />
          <link rel="preconnect" href="https://firestore.googleapis.com" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

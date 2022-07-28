import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"


export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script src = { zephr }
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

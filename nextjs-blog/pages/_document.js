import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'



export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <script
            src="https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"
            strategy="lazyOnload"
            onLoad={() => {
              zephrBrowser.run("https://tomd-vercel.cdn.zephr.com")
                console.log(`script loaded correctly`)}
            }
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

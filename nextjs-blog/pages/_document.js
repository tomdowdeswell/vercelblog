import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <Script
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

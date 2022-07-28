import Script from 'next/script'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document{
 render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument

import Script from 'next/script'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"

import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head 
        <script src = { zephr }/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

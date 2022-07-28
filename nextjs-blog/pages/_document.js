import Document, { Html, Head, Main, NextScript } from 'next/document'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"

export default function Document() {
  return (
    <Html>
      <Head>
        <script src={zephr}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}


// import Script from 'next/script'
// const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"
// import Document, { Html, Head, Main, NextScript } from 'next/document'

// export default class MyDocument extends Document {
//   render() {
//     return (
//       <Html>
//         <Head>
//           <script src={zephr} />
//         </Head>
//         <body>
//           <Main />
//           <NextScript />
//         </body>
//       </Html>
//     )
//   }
// }

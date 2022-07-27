import Link from 'next/link'
import Script from 'next/script'

export default function FirstPost() {
  return (
    <>
      <Script
        src="https://assets.zephr.com/zephr-browser/1.3.10/zephr-browser.umd.js"
        strategy="lazyOnload"
        onLoad={() => {
          zephrBrowser.run("https://tomd-demo.cdn.zephr.com/")
          console.log(`script loaded correctly`)}
        }
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
}

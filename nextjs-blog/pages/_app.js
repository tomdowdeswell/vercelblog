import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"

function MyApp({ Component, pageProps }) {
  return (
    <>
      <script src = {zephr} />
      <Component {...pageProps} />
    </>
  })
}

export default MyApp




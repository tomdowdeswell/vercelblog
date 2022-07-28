import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  useEffect(() => { 
      zephrBrowser.run();
  });
  
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp




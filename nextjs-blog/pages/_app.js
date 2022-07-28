import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"
import { useRouter } from 'next/router'

function MyApp() {
  const [resourceType, setResourceType] = useState('page')
  
  useEffect(() => {
    zephrBrowser.run("https://tomd-vercel.cdn.zephr.com")
  }, [router.asPath]);
  
  return (
    <>
    <script src = { zephr } />
    
    <button onClick={() => setResourceType(`wall of text
          Jump to navigationJump to search

          Contents
          1	English
          1.1	Noun
          1.1.1	Alternative forms
          1.1.2	Translations
          1.1.3	See also
          English
          Noun
          wall of text (plural walls of text)

          (chiefly Internet slang) An intimidatingly large block of writing, particularly one with few or no paragraph breaks.
          Alternative forms
          text wall
          Translations
          ±an intimidatingly large block of writing
          See also
          copypasta
          info-dump`)}>Refresh</button>
    <button onClick={() => setResourceType(`wall of text
          Jump to navigationJump to search

          Contents
          1	English
          1.1	Noun
          1.1.1	Alternative forms
          1.1.2	Translations
          1.1.3	See also
          English
          Noun
          wall of text (plural walls of text)

          (chiefly Internet slang) An intimidatingly large block of writing, particularly one with few or no paragraph breaks.
          Alternative forms
          text wall
          Translations
          ±an intimidatingly large block of writing
          See also
          copypasta
          info-dump `)}>Article</button>


    <p class = "article"> {resourceType} 
        </p>
  
    <p class = "article-2"> wall of text
          Jump to navigationJump to search

          Contents
          1	English
          1.1	Noun
          1.1.1	Alternative forms
          1.1.2	Translations
          1.1.3	See also
          English
          Noun
          wall of text (plural walls of text)

          (chiefly Internet slang) An intimidatingly large block of writing, particularly one with few or no paragraph breaks.
          Alternative forms
          text wall
          Translations
          ±an intimidatingly large block of writing
          See also
          copypasta
          info-dump 
        </p>
  
  
  <p class = "article-3"> wall of text
          Jump to navigationJump to search

          Contents
          1	English
          1.1	Noun
          1.1.1	Alternative forms
          1.1.2	Translations
          1.1.3	See also
          English
          Noun
          wall of text (plural walls of text)

          (chiefly Internet slang) An intimidatingly large block of writing, particularly one with few or no paragraph breaks.
          Alternative forms
          text wall
          Translations
          ±an intimidatingly large block of writing
          See also
          copypasta
          info-dump 
        </p>
   </>
  )
}

export default MyApp



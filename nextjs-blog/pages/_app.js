import '../styles/globals.css'
import React, { useState, useEffect } from 'react'
import Script from 'next/script'
const zephr = "https://assets.zephr.com/zephr-browser/1.3.11/zephr-browser.umd.js"

function MyApp() {
  const [resourceType, setResourceType] = useState('page')
  
  useEffect(() => {
    zephrBrowser.run("https://tomd-vercel.cdn.zephr.com")
  });
  
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
    <button onClick={() => setResourceType(` What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. `)}>Article</button>


    <p class = "article"> {resourceType} </p>
   </>
  )
}

export default MyApp



import '../styles/globals.css'
import React, { useState, useEffect } from 'react'

function MyApp() {
  const [resourceType, setResourceType] = useState('page')
  
  useEffect(() => {
    zephrBrowser.run()
  })
  
  return (
    <>
    
    <button onClick={() => setResourceType('refresh')}>Refresh</button>
    <button onClick={() => setResourceType('article')}>Article</button>

    <h1>{resourceType}</h1>

    <p class = "article"> wall of text
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



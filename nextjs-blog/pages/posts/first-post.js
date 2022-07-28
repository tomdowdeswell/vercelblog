import Link from 'next/link'

useEffect(() => {
  zephrBrowser.run())}


export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
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
    </>
  );
}

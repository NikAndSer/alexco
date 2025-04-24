import { Html, Head, Main, NextScript } from 'next/document'
import { textFont, titleFont } from './/_app.js';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`${textFont.variable} ${titleFont.variable}`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

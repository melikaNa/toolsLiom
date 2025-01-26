import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <Script
          id="hamdast-script"
          type="text/javascript"
          src="https://hamdast.paziresh24.com/sdk/hamdast.js"
          strategy="beforeInteractive"
        />
        <Script src="https://developer.eitaa.com/eitaa-web-app.js">
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

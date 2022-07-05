import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Braains.io NFT" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://about.braains.io" />
        <meta
          property="og:image"
          content="http://about.braains.io/wardrobe1.png"
        />
        <meta
          property="og:description"
          content="The official NFT for the hit zombie survival browser game"
        />
        <meta name="theme-color" content="#32e0a3" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

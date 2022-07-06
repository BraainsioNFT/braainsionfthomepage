import "../styles/globals.css";

import Aos from "aos";
import { useEffect } from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });

  return <Component {...pageProps} />;
}

export default MyApp;

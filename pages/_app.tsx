import { useEffect } from "react";
import AOS from "aos";

import "aos/dist/aos.css";

import "../styles/globals.css";
import type { AppProps } from "next/app";
import "../styles/icomoon.css";
import "../styles/library.css";
import "../styles/libs.css";
import "../styles/post.css";
import "../styles/preload.css";
import "../styles/index.css";
import Header from "../src/component/global/Header";
import Footer from "../src/component/global/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;

import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../src/component/global/Header";
import Main from "../src/component/main";
import Footer from "../src/component/global/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
};

export default Home;

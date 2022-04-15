import type { NextPage } from "next";
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

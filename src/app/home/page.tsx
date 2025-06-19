import React from "react";
import Header from "@/components/layout/Header";
import Content from "@/components/layout/Content";
import CardHome from "@/components/PagesComponents/Home/session/CardHome";

const Home = (): React.JSX.Element => {
  return (
    <>
      <Header />
      <Content>
        <CardHome />
      </Content>
    </>
  );
};

export default Home;

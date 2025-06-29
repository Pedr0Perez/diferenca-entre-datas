import React from "react";
import CardHome from "@/components/PagesComponents/Home/session/CardHome";
import DefaultPage from "@/components/layout/DefaultPage";

const Home = (): React.ReactNode => {
  return (
    <DefaultPage>
      <CardHome />
    </DefaultPage>
  );
};

export default Home;

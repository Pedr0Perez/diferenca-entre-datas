import React from "react";
import Header from "../Header";
import Content from "../Content";
import TypeDefaultPageProps from "./types/TypeDefaultPageProps";
import Footer from "../Footer";

const DefaultPage = ({ children }: TypeDefaultPageProps): React.ReactNode => {
  return (
    <>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </>
  );
};

export default DefaultPage;

import React from "react";
import HeaderContainer from "../common/containers/header-container/HeaderContainer";
import FooterContainer from "../common/containers/footer-container/FooterContainer";
import Banner from "./components";

function LandingPage() {
  return (
    <div>
      <HeaderContainer />
      <Banner.Title></Banner.Title>
      <Banner.Description></Banner.Description>
      <Banner.Image />
      <FooterContainer />
    </div>
  );
}

export default LandingPage;

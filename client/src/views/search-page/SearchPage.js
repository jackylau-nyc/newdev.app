import React from "react";
import HeaderContainer from "../common/containers/header-container/HeaderContainer";
import SearchContainer from "./containers/SearchContainer";
import ResultsContainer from "./containers/ResultsContainer";

function SearchPage() {
  return (
    <>
      <HeaderContainer />
      <SearchContainer />
      <ResultsContainer />
    </>
  );
}

export default SearchPage;

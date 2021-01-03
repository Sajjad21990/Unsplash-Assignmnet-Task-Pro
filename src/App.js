import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import { GlobalStyles } from "./GlobalStyles";
import styled from "styled-components";

const Header = styled.header`
  max-width: 70rem;
  margin: 2rem auto;
  text-align: center;
`;

const H1 = styled.h1`
  margin-bottom: 1em;
  font-family: "Rubik" sans-serif;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header>
        <H1>Unsplash Api Assignment</H1>
      </Header>
      <Home />
    </>
  );
}

export default App;

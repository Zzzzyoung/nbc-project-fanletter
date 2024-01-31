import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  return (
    <StContainer>
      <Header />
      <FanLetterForm />
      <FanLetterList />
    </StContainer>
  );
}

export default Home;

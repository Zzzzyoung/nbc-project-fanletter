import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import { MemberContext } from "context/MemberContext";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  const [selectedMember, setSelectedMember] = useState("카리나");

  return (
    <Container>
      <MemberContext.Provider value={{ selectedMember, setSelectedMember }}>
        <Header />
        <FanLetterForm />
        <FanLetterList />
      </MemberContext.Provider>
    </Container>
  );
}

export default Home;

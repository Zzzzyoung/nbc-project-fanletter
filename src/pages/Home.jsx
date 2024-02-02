import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home({ fanLetter, setFanLetter }) {
  const [selectedMember, setSelectedMember] = useState("카리나");

  return (
    <Container>
      <Header
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <FanLetterForm fanLetter={fanLetter} setFanLetter={setFanLetter} />
      <FanLetterList fanLetter={fanLetter} selectedMember={selectedMember} />
    </Container>
  );
}

export default Home;

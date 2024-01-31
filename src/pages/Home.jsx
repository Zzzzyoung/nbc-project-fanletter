import FanLetterForm from "components/FanLetterForm";
import FanLetterList from "components/FanLetterList";
import Header from "components/Header";
import fakeData from "fakeData.json";
import React, { useState } from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function Home() {
  const [selectedMember, setSelectedMember] = useState("카리나");
  const [fanLetter, setFanLetter] = useState(fakeData);

  return (
    <StContainer>
      <Header
        selectedMember={selectedMember}
        setSelectedMember={setSelectedMember}
      />
      <FanLetterForm fanLetter={fanLetter} setFanLetter={setFanLetter} />
      <FanLetterList fanLetter={fanLetter} selectedMember={selectedMember} />
    </StContainer>
  );
}

export default Home;

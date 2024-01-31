import React from "react";
import fakeData from "fakeData.json";
import FanLetterItem from "./FanLetterItem";
import styled from "styled-components";

const StFanLetterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 600px;
  background-color: lightgreen;
  border-radius: 10px;
`;

function FanLetterList({ selectedMember }) {
  const filteredLetterItem = fakeData.filter((item) => {
    return item.writedTo === selectedMember;
  });

  return (
    <StFanLetterListWrapper>
      {filteredLetterItem.map((item) => (
        <FanLetterItem key={item.id} item={item} />
      ))}
    </StFanLetterListWrapper>
  );
}

export default FanLetterList;

import React from "react";
import FanLetterItem from "./FanLetterItem";
import styled from "styled-components";

const FanLetterListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 30px;
  width: 600px;
  background-color: lightgreen;
  border-radius: 10px;
`;

function FanLetterList({ fanLetter, selectedMember }) {
  const filteredLetterItem = fanLetter.filter((item) => {
    return item.writedTo === selectedMember;
  });

  return (
    <FanLetterListWrapper>
      {filteredLetterItem.map((item) => (
        <FanLetterItem key={item.id} item={item} />
      ))}
    </FanLetterListWrapper>
  );
}

export default FanLetterList;

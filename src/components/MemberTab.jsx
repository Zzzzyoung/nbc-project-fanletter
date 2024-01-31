import React, { useState } from "react";
import styled from "styled-components";

const StMemberTabWrapper = styled.section`
  display: flex;
  gap: 15px;
  padding: 15px;
  background-color: skyblue;
  border-radius: 10px;
`;

const StMemberTab = styled.button`
  height: 40px;
  width: 100px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
`;

const teletubbies = [
  { id: 1, name: "보라돌이" },
  { id: 2, name: "뚜비" },
  { id: 3, name: "나나" },
  { id: 4, name: "뽀" },
];

function MemberTab() {
  const [selectMember, setSelectMember] = useState("보라돌이");

  const clickMemberTab = (name) => {
    setSelectMember(name);
  };

  return (
    <StMemberTabWrapper>
      {teletubbies.map(({ id, name }) => {
        return (
          <StMemberTab
            type="button"
            key={id}
            onClick={() => clickMemberTab(name)}
            selected={selectMember === name}
          >
            {name}
          </StMemberTab>
        );
      })}
    </StMemberTabWrapper>
  );
}

export default MemberTab;

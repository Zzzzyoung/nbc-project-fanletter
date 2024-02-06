import React from "react";
import styled from "styled-components";

function MemberTab({ selectedMember, setSelectedMember }) {
  const clickMemberTab = (name) => {
    setSelectedMember(name);
  };

  return (
    <MemberTabWrapper>
      {aespa.map(({ id, name }) => {
        return (
          <MemberTabBtn
            type="button"
            key={id}
            onClick={() => clickMemberTab(name)}
            selected={selectedMember === name}
          >
            {name}
          </MemberTabBtn>
        );
      })}
    </MemberTabWrapper>
  );
}

export default MemberTab;

const MemberTabWrapper = styled.nav`
  display: flex;
  gap: 15px;
  padding: 15px;
  background-color: skyblue;
  border-radius: 10px;
`;

const MemberTabBtn = styled.button`
  height: 40px;
  width: 100px;
  font-size: 18px;
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "black" : "white")};
  color: ${(props) => (props.selected ? "white" : "black")};
  cursor: pointer;
`;

const aespa = [
  { id: 1, name: "카리나" },
  { id: 2, name: "지젤" },
  { id: 3, name: "윈터" },
  { id: 4, name: "닝닝" },
];

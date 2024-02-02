import React from "react";
import styled from "styled-components";

const StBtn = styled.button`
  background-color: black;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
`;

function Button({ btnname, onClick = () => {} }) {
  return <StBtn onClick={onClick}>{btnname}</StBtn>;
}

export default Button;

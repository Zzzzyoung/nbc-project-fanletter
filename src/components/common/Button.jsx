import styled from "styled-components";

function Button({ btnName, onClick = () => {} }) {
  return <StBtn onClick={onClick}>{btnName}</StBtn>;
}

export default Button;

const StBtn = styled.button`
  background-color: black;
  color: white;
  padding: 8px 12px;
  border-radius: 5px;
  font-size: 13px;
  cursor: pointer;
`;

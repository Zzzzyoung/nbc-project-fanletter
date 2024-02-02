import React from "react";
import MemberTab from "./MemberTab";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 300px;
  background-color: pink;
`;

const Title = styled.h1`
  font-size: 48px;
  font-weight: 900;
  margin: 60px auto 50px auto;
`;

function Header() {
  return (
    <Container>
      <Title>에스파 팬레터함</Title>
      <p>redux 브랜치 생성</p>
      <MemberTab />
    </Container>
  );
}

export default Header;

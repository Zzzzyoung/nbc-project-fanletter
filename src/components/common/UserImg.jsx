import React from "react";
import styled from "styled-components";
import defaultUserImg from "assets/defaultUserImg.png";

const UserFigure = styled.figure`
  width: ${(props) => (props.size === "large" ? "100px" : "50px")};
  height: ${(props) => (props.size === "large" ? "100px" : "50px")};

  border-radius: 50%;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;

function UserImg({ item, size }) {
  return (
    <UserFigure size={size}>
      <img src={item ?? defaultUserImg} alt="유저이미지" />
    </UserFigure>
  );
}

export default UserImg;

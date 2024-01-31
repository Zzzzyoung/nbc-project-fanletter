import React from "react";
import defaultUserImg from "assets/defaultUserImg.png";
import styled from "styled-components";

const StFanLetterItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding: 20px 50px;
  border: 1px solid black;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 0.15s ease;
  }
`;

const StUserInfo = styled.section`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const StUserImg = styled.figure`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 50%;
  }
`;

const StUserText = styled.article`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StComment = styled.section`
  background-color: green;
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

function FanLetterItem({ item }) {
  const formattedCreatedAt = new Date(item.createdAt).toLocaleDateString(
    "ko-Kr",
    {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
      weekday: "short",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    }
  );

  return (
    <StFanLetterItemWrapper>
      <StUserInfo>
        <StUserImg>
          <img src={item.avatar ?? defaultUserImg} alt="유저이미지" />
        </StUserImg>
        <StUserText>
          <p>{item.nickname}</p>
          <time>{formattedCreatedAt}</time>
        </StUserText>
      </StUserInfo>
      <StComment>{item.content}</StComment>
    </StFanLetterItemWrapper>
  );
}

export default FanLetterItem;

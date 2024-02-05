import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { formattedCreatedAt } from "components/common/Date";
import UserImg from "./common/UserImg";

function FanLetterItem({ item }) {
  const navigate = useNavigate();

  return (
    <FanLetterItemWrapper
      onClick={() => {
        navigate(`/detail/${item.id}`);
      }}
    >
      <UserInfo>
        <UserImg item={item.avatar} />
        <UserText>
          <p>{item.nickname}</p>
          <time>{formattedCreatedAt(item.createdAt)}</time>
        </UserText>
      </UserInfo>
      <Content>{item.content}</Content>
    </FanLetterItemWrapper>
  );
}

export default FanLetterItem;

const FanLetterItemWrapper = styled.li`
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

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const UserText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  & p {
    font-size: 18px;
    font-weight: 500;
  }
`;

const Content = styled.p`
  background-color: green;
  border-radius: 10px;
  padding: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
`;

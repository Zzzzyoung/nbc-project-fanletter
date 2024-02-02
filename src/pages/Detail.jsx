import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FanLetterContext } from "context/FanLetterContext";
import { formattedCreatedAt } from "components/common/Date";
import UserImg from "components/common/UserImg";
import Button from "components/common/Button";

const HomeBtn = styled.div`
  margin: 20px 20px;
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const DetailFanLetterItemWrapper = styled.section`
  background-color: purple;
  color: white;
  height: 500px;
  width: 800px;
`;

const UserHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 35px 30px;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 32px;
  font-weight: 600;

  & p {
    width: 400px;
  }
`;

const UserMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  font-size: 20px;
  margin: 40px 40px 20px 40px;
`;

const ToWhom = styled.p`
  font-size: 23px;
  font-weight: 500;
`;

const EditContent = styled.textarea`
  padding: 20px 30px;
  height: 202px;
  background-color: blue;
  line-height: 2rem;
  color: white;
  font-size: 20px;
  resize: none;
`;

const UserContent = styled.p`
  padding: 20px 30px;
  height: 200px;
  background-color: blue;
  line-height: 2rem;
`;

const BtnWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 40px;
`;

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");
  const { fanLetter, setFanLetter } = useContext(FanLetterContext);

  const { avatar, nickname, createdAt, writedTo, content } = fanLetter.find(
    (item) => item.id === id
  );

  // 수정하기
  const clickEditDoneBtn = () => {
    if (!editedTextArea) {
      return alert("수정된 부분이 없습니다.");
    }

    const checkEdit = window.confirm("수정하시겠습니까?");
    if (checkEdit) {
      const editedFanLetter = fanLetter.map((item) => {
        if (item.id === id) {
          return { ...item, content: editedTextArea };
        } else {
          return item;
        }
      });

      setFanLetter(editedFanLetter);
      setIsEditing(false);
      setEditedTextArea("");
    }
  };

  // 삭제하기
  const clickDeleteBtn = () => {
    const checkDelete = window.confirm("삭제하시겠습니까?");

    if (checkDelete) {
      const remainFanLetter = fanLetter.filter((item) => item.id !== id);
      navigate("/");
      setFanLetter(remainFanLetter);
    } else return;
  };

  return (
    <>
      <HomeBtn>
        <Button
          btnname="홈으로"
          onClick={() => {
            navigate("/");
          }}
        />
      </HomeBtn>
      <Container>
        <DetailFanLetterItemWrapper>
          <UserHeader>
            <UserInfo>
              <UserImg item={avatar} size="large" />
              <p>{nickname}</p>
            </UserInfo>
            <time>{formattedCreatedAt(createdAt)}</time>
          </UserHeader>
          {isEditing ? (
            <>
              <UserMain>
                <ToWhom>To. {writedTo}</ToWhom>
                <EditContent
                  defaultValue={content}
                  maxLength={100}
                  autoFocus
                  onChange={(event) => setEditedTextArea(event.target.value)}
                />
              </UserMain>
              <BtnWrapper>
                <Button btnname="수정완료" onClick={clickEditDoneBtn} />
                <Button btnname="취소" onClick={() => setIsEditing(false)} />
              </BtnWrapper>
            </>
          ) : (
            <>
              <UserMain>
                <ToWhom>To. {writedTo}</ToWhom>
                <UserContent>{content}</UserContent>
              </UserMain>
              <BtnWrapper>
                <Button btnname="수정" onClick={() => setIsEditing(true)} />
                <Button btnname="삭제" onClick={clickDeleteBtn} />
              </BtnWrapper>
            </>
          )}
        </DetailFanLetterItemWrapper>
      </Container>
    </>
  );
}

export default Detail;

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import defaultUserImg from "assets/defaultUserImg.png";

const HomeBtn = styled.div`
  margin: 20px 20px;

  & button {
    height: 35px;
    width: 70px;
    font-size: 15px;
  }
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

  & figure {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;

    & img {
      width: 100%;
      height: 100%;
      object-fit: fill;
      border-radius: 50%;
    }
  }

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

  & button {
    height: 35px;
    width: 55px;
    font-size: 15px;
  }
`;

function Detail({ fanLetter, setFanLetter }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");

  const { avatar, nickname, createdAt, writedTo, content } = fanLetter.find(
    (item) => item.id === id
  );

  const formattedCreatedAt = new Date(createdAt).toLocaleDateString("ko-Kr", {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

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
        <button
          onClick={() => {
            navigate("/");
          }}
        >
          홈으로
        </button>
      </HomeBtn>
      <Container>
        <DetailFanLetterItemWrapper>
          <UserHeader>
            <UserInfo>
              <figure>
                <img src={avatar ?? defaultUserImg} alt="유저이미지" />
              </figure>
              <p>{nickname}</p>
            </UserInfo>
            <time>{formattedCreatedAt}</time>
          </UserHeader>
          {isEditing ? (
            <>
              <UserMain>
                <p>To. {writedTo}</p>
                {/* <UserContent>{content}</UserContent> */}
                <EditContent
                  defaultValue={content}
                  maxLength={100}
                  autoFocus
                  onChange={(event) => setEditedTextArea(event.target.value)}
                />
              </UserMain>
              <BtnWrapper>
                <button onClick={clickEditDoneBtn}>수정 완료</button>
                <button onClick={() => setIsEditing(false)}>취소</button>
              </BtnWrapper>
            </>
          ) : (
            <>
              <UserMain>
                <p>To. {writedTo}</p>
                <UserContent>{content}</UserContent>
              </UserMain>
              <BtnWrapper>
                <button onClick={() => setIsEditing(true)}>수정</button>
                <button onClick={clickDeleteBtn}>삭제</button>
              </BtnWrapper>
            </>
          )}
        </DetailFanLetterItemWrapper>
      </Container>
    </>
  );
}

export default Detail;

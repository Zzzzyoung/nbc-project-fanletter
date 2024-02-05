import React, { useContext, useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { FanLetterContext } from "context/FanLetterContext";
import Button from "./common/Button";
import CommonModal from "./common/CommonModal";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 30px;
  padding: 30px 30px 25px 30px;
  width: 600px;
  background-color: yellow;
  border-radius: 10px;
`;

const FormInput = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & label {
    width: 80px;
  }

  & input {
    width: 100%;
    height: 30px;
    padding-left: 10px;
  }
`;

const FormTextarea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & label {
    width: 80px;
  }

  & textarea {
    width: 100%;
    height: 85px;
    padding-top: 10px;
    padding-left: 10px;
    resize: none;
  }
`;

const FormSelect = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & label {
    width: 65px;
  }

  & select {
    width: 80px;
    padding-left: 5px;
  }
`;

const FormBtn = styled.div`
  display: flex;
  justify-content: flex-end;
`;

function FanLetterForm() {
  const [nickname, setNickname] = useState("");
  const [content, setContent] = useState("");
  const [member, setMember] = useState("카리나");
  const { fanLetter, setFanLetter } = useContext(FanLetterContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 모달이 열리면 body에 overflow: hidden; 스타일 적용
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  // 제출하기
  // 제출 모달창 열기
  const openModal = () => setIsModalOpen(true);
  // 제출 모달창 닫기
  const closeModal = () => setIsModalOpen(false);

  // 팬레터 제출하기
  const submitFanLetter = (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!nickname.trim()) {
      return alert("닉네임을 입력하세요.");
    } else if (nickname.trim() && !content.trim()) {
      return alert("내용을 입력하세요.");
    } else {
      openModal();
    }
  };

  // 제출 모달창 확인
  const confirmModal = () => {
    const newFanLetter = {
      createdAt: new Date(),
      nickname,
      avatar: null,
      content,
      writedTo: member,
      id: uuid(),
    };

    setFanLetter([newFanLetter, ...fanLetter]);
    setNickname("");
    setContent("");
    setMember("카리나");
    closeModal();
  };

  // 제출 모달창 취소
  const cancelModal = () => closeModal();

  return (
    <Form>
      <FormInput>
        <label>닉네임 :&nbsp;</label>
        <input
          type="text"
          name="nickname"
          placeholder="최대 20글자까지 작성할 수 있습니다."
          maxLength={20}
          autoFocus
          value={nickname}
          onChange={(event) => {
            setNickname(event.target.value);
          }}
        />
      </FormInput>
      <FormTextarea>
        <label>내용 :&nbsp;</label>
        <textarea
          name="content"
          placeholder="최대 100글자까지 작성할 수 있습니다."
          maxLength={100}
          value={content}
          onChange={(event) => {
            setContent(event.target.value);
          }}
        />
      </FormTextarea>
      <FormSelect>
        <label>TO.</label>
        <div>
          <select
            name="writedTo"
            value={member}
            onChange={(event) => setMember(event.target.value)}
          >
            <option value="카리나">카리나</option>
            <option value="지젤">지젤</option>
            <option value="윈터">윈터</option>
            <option value="닝닝">닝닝</option>
          </select>
        </div>
      </FormSelect>
      <FormBtn>
        <Button btnname="펜레터 등록" onClick={submitFanLetter} />
      </FormBtn>

      <CommonModal
        isOpen={isModalOpen}
        confirmModal={confirmModal}
        cancelModal={cancelModal}
        modalTitle="펜레터를 등록하시겠습니까?"
      />
    </Form>
  );
}

export default FanLetterForm;

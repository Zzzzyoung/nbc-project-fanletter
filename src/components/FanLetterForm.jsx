import React, { useContext, useState } from "react";
import { v4 as uuid } from "uuid";
import styled from "styled-components";
import { FanLetterContext } from "context/FanLetterContext";
import Button from "./common/Button";

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

  // 팬레터 제출하기
  const submitFanLetter = (event) => {
    event.preventDefault();

    // 유효성 검사
    if (!nickname) {
      return alert("닉네임을 입력하세요.");
    } else if (nickname && !content) {
      return alert("내용을 입력하세요.");
    } else {
      const checkSubmit = window.confirm("팬레터를 등록하시겠습니까?");
      if (checkSubmit) {
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
      }
    }
  };

  return (
    <Form>
      <FormInput>
        <label>닉네임 :&nbsp;</label>
        <input
          type="text"
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
            value={member}
            onChange={(event) => setMember(event.target.value)}
          >
            <option>카리나</option>
            <option>지젤</option>
            <option>윈터</option>
            <option>닝닝</option>
          </select>
        </div>
      </FormSelect>
      <FormBtn>
        <Button btnname="펜레터 등록" onClick={submitFanLetter} />
      </FormBtn>
    </Form>
  );
}

export default FanLetterForm;

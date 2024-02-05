import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { formattedCreatedAt } from "components/common/Date";
import UserImg from "components/common/UserImg";
import Button from "components/common/Button";
import CommonModal from "components/common/CommonModal";
import Modal from "react-modal";
import { useSelector, useDispatch } from "react-redux";
import { deleteFanLetter, editFanLetter } from "../redux/modules/fanLetter";

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [editedTextArea, setEditedTextArea] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const fanLetter = useSelector((state) => state.fanLetter);
  const dispatch = useDispatch();

  const { avatar, nickname, createdAt, writedTo, content } = fanLetter.find(
    (item) => item.id === id
  );

  // 삭제하기
  // 삭제 모달창 열기
  const openModal = () => setIsModalOpen(true);
  // 삭제 모달창 닫기
  const closeModal = () => setIsModalOpen(false);

  // 삭제하기
  const clickDeleteBtn = () => {
    openModal();
  };

  // 삭제 모달창 확인
  const confirmModal = () => {
    dispatch(deleteFanLetter(id));
    navigate("/");
    closeModal();
  };

  // 삭제 모달창 취소
  const cancelModal = () => closeModal();

  // 수정하기
  // 수정 모달창 열기
  const openEditModal = () => setIsEditModalOpen(true);

  // 수정 모달창 닫기
  const closeEditModal = () => setIsEditModalOpen(false);

  // 수정 완료하기
  const clickEditDoneBtn = () => {
    if (!editedTextArea) {
      return alert("수정된 부분이 없습니다.");
    }

    openEditModal();
  };

  // 수정 모달창 확인
  const confirmEditModal = () => {
    dispatch(editFanLetter({ id, editedTextArea }));
    setIsEditing(false);
    setEditedTextArea("");
    closeEditModal();
  };

  // 수정 모달창 취소
  const cancelEditModal = () => closeEditModal();

  return (
    <Container>
      <Link to="/">
        <HomeBtn>
          <Button btnName="홈으로" />
        </HomeBtn>
      </Link>

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
              <Button btnName="수정완료" onClick={clickEditDoneBtn} />
              <Button btnName="취소" onClick={() => setIsEditing(false)} />
            </BtnWrapper>
          </>
        ) : (
          <>
            <UserMain>
              <ToWhom>To. {writedTo}</ToWhom>
              <UserContent>{content}</UserContent>
            </UserMain>
            <BtnWrapper>
              <Button btnName="수정" onClick={() => setIsEditing(true)} />
              <Button btnName="삭제" onClick={clickDeleteBtn} />
            </BtnWrapper>
          </>
        )}
      </DetailFanLetterItemWrapper>

      <CommonModal
        isOpen={isModalOpen}
        confirmModal={confirmModal}
        cancelModal={cancelModal}
        modalTitle="삭제하시겠습니까?"
      />

      <Modal isOpen={isEditModalOpen} style={ModalStyles}>
        <ModalContent>
          <p>수정하시겠습니까?</p>
          <ModalBtnWrapper>
            <Button btnName="확인" onClick={confirmEditModal} />
            <Button btnName="취소" onClick={cancelEditModal} />
          </ModalBtnWrapper>
        </ModalContent>
      </Modal>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
    to right,
    #aee1f9,
    #b3c8ee,
    #b9afe5,
    #bd96da
  );
`;

const HomeBtn = styled.div`
  position: absolute;
  top: 50px;
  left: 70px;
`;

const DetailFanLetterItemWrapper = styled.section`
  background-color: transparent;
  border: 1px solid white;
  border-radius: 10px;
  color: black;
  height: 500px;
  width: 800px;
  margin-top: 10px;
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
  background-color: rgba(255, 255, 255, 0.23);
  border: 1px solid white;
  border-radius: 10px;
  line-height: 2rem;
  font-size: 20px;
  resize: none;
`;

const UserContent = styled.p`
  padding: 20px 30px;
  height: 200px;
  background-color: rgba(255, 255, 255, 0.23);
  border: 1px solid white;
  border-radius: 10px;
  line-height: 2rem;
`;

const BtnWrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  margin-right: 40px;
`;

const ModalStyles = {
  content: {
    height: "300px",
    width: "500px",
    margin: "auto",
    borderRadius: "10px",
  },
};

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  & p {
    font-size: 18px;
  }
`;

const ModalBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
`;

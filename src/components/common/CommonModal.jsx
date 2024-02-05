import Modal from "react-modal";
import styled from "styled-components";

// react-modal을 위한 appElement 설정
Modal.setAppElement("#root"); // 실제 root 요소의 ID로 변경해라

function CommonModal({ isOpen, confirmModal, cancelModal, modalTitle }) {
  return (
    <Modal isOpen={isOpen} style={ModalStyles}>
      <ModalContent>
        <p>{modalTitle}</p>
        <ModalBtnWrapper>
          <button onClick={confirmModal}>확인</button>
          <button onClick={cancelModal}>취소</button>
        </ModalBtnWrapper>
      </ModalContent>
    </Modal>
  );
}

export default CommonModal;

const ModalStyles = {
  content: {
    height: "250px",
    width: "470px",
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

  & button {
    background-color: #4b3c57;
    color: white;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 13px;
    cursor: pointer;

    &:hover {
      background-color: rgba(255, 255, 255, 0.23);
      color: black;
    }
  }
`;

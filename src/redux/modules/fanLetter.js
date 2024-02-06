import fakeData from "fakeData.json";

// 액션 타입 정의
// 팬레터 추가
const ADD_FANLETTER = "fanLetter/ADD_FANLETTER";

// 팬레터 삭제
const DELETE_FANLETTER = "fanLetter/DELETE_FANLETTER";

// 팬레터 수정
const EDIT_FANLETTER = "fanLetter/EDIT_FANLETTER";

// 액션 create 함수
export const addFanLetter = (payload) => {
  return {
    type: ADD_FANLETTER,
    payload,
  };
};

export const deleteFanLetter = (payload) => {
  return {
    type: DELETE_FANLETTER,
    payload,
  };
};

export const editFanLetter = (payload) => {
  return {
    type: EDIT_FANLETTER,
    payload,
  };
};

const initialState = fakeData;

function fanLetter(state = initialState, action) {
  // 리듀서
  switch (action.type) {
    case ADD_FANLETTER:
      const newFanLetter = action.payload;
      return [newFanLetter, ...state];
    case DELETE_FANLETTER:
      const fanLetterId = action.payload;
      return state.filter((fanLetter) => fanLetter.id !== fanLetterId);
    case EDIT_FANLETTER:
      const { id, editedTextArea } = action.payload;
      return state.map((fanLetter) => {
        if (fanLetter.id === id) {
          return { ...fanLetter, content: editedTextArea };
        } else {
          return fanLetter;
        }
      });
    default:
      return state;
  }
}

export default fanLetter;

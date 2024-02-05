// 멤버 선택
const SELECT_MEMBER = "member/SELECT_MEMBER";

export const selectMember = (payload) => {
  return {
    type: SELECT_MEMBER,
    payload,
  };
};

const initialState = "카리나";

function member(state = initialState, action) {
  switch (action.type) {
    case SELECT_MEMBER:
      const selectedMember = action.payload;
      return selectedMember;
    default:
      return state;
  }
}

export default member;

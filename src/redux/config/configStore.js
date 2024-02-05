// 중앙 데이터 관리소(store)를 설정하는 부분
import { createStore } from "redux";
// store 만드는 api
import { combineReducers } from "redux";
// reducer들 하나로 묶는 역할
import fanLetter from "../modules/fanLetter";
import member from "../modules/member";

//rootReducer : reducer들을 하나로 모아서 한 개로 만들어 놓은 기본 reducer
// 이 안에 리듀서 넣으면 애플리케이션 전체에서 사용 가능
const rootReducer = combineReducers({
  fanLetter,
  member,
});
const store = createStore(rootReducer);

export default store;

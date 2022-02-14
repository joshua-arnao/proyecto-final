import { createStore } from "redux";

const initialState = {
  isLogin: false,
  userID: null,
}

function mainReducer(state=initialState,action) {
  switch (action.type) {
    case "SET_IS_LOGIN": {
      return {
        ...state,
        isLogin: action.payload,
      }
    }
    case "SET_USER_ID": {
      return {
        ...state,
        userID: action.iduser,
      }
    }
    default: return state;
    }
}

export const store = createStore(
  mainReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

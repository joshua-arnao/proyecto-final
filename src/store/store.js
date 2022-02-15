import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialState = {
  isLogin: false,
  userID: null,
}
const persistConfig = {
  key: 'root',
  storage,
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

const persistedReducer = persistReducer(persistConfig, mainReducer)

export const store = createStore(
  persistedReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const persistor = persistStore(store);
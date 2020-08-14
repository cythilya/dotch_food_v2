import {
    DOTCH_FOOD_COOKIE_KEY,
    LOGIN,
    LOGOUT,
    RESTORE_USER_INFO,
} from '../constants';

const intialState = {
  isLogin: false,
  userInfo: null,
}

export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN:
      const userInfoString = JSON.stringify(action.payload.userInfo);
      document.cookie = `${DOTCH_FOOD_COOKIE_KEY}=${userInfoString}; path=/`;
      return { ...state, isLogin: action.payload.isLogin, userInfo: action.payload.userInfo };
    case LOGOUT:
      document.cookie = `${DOTCH_FOOD_COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
      return { ...state, isLogin: false, userInfo: null };
    case RESTORE_USER_INFO: // restore user info from cookie
      return { ...state, isLogin: true, userInfo: action.payload };
    default:
      return state;
  }
}

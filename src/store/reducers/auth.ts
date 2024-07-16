import {AuthActionTypes} from "@store/types/auth"

const initialState = {
  isLoggedIn: false
};

const authReducer = (state = initialState, action:AuthActionTypes) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLoggedIn: true
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isLoggedIn: false
      };
    default:
      return state;
  }
};

export default authReducer;

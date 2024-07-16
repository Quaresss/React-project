import {
  LoginSuccessAction,
  LogoutSuccessAction,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from '@store/types/auth';

export const loginSuccess = (): LoginSuccessAction => ({
  type: LOGIN_SUCCESS
});

export const logoutSuccess = (): LogoutSuccessAction => ({
  type: LOGOUT_SUCCESS
});

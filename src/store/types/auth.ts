export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';

export interface LoginSuccessAction {
  type: typeof LOGIN_SUCCESS;
}

export interface LogoutSuccessAction {
  type: typeof LOGOUT_SUCCESS;
}

export type AuthActionTypes = LoginSuccessAction | LogoutSuccessAction;

export const SET_SEARCH = 'SET_SEARCH';
export const SET_UPDATE = 'SET_UPDATE';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export interface SearchState {
  search: string;
  update: string;
}

export interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

export interface SetUpdateAction {
  type: typeof SET_UPDATE;
  payload: string;
}

export interface ClearSearchAction {
  type: typeof CLEAR_SEARCH;
}

export type SearchActionTypes =
  | SetSearchAction
  | SetUpdateAction
  | ClearSearchAction;

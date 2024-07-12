export const SET_SEARCH = 'SET_SEARCH';
export const SET_UPDATE = 'SET_UPDATE';
export const CLEAR_SEARCH = 'CLEAR_SEARCH';

export interface SearchState {
  search: string;
  update: string;
}

interface SetSearchAction {
  type: typeof SET_SEARCH;
  payload: string;
}

interface SetUpdateAction {
  type: typeof SET_UPDATE;
  payload: string;
}

interface ClearSearchAction {
  type: typeof CLEAR_SEARCH;
}

export type SearchActionTypes = SetSearchAction | SetUpdateAction | ClearSearchAction;

export const setSearch = (search: string) => ({
  type: SET_SEARCH,
  payload: search,
});

export const setUpdate = (update: string) => ({
  type: SET_UPDATE,
  payload: update,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
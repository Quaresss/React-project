import {
  SET_SEARCH,
  SET_UPDATE,
  CLEAR_SEARCH,
  SetSearchAction,
  SetUpdateAction,
  ClearSearchAction
} from '@store/types/search';

export const setSearch = (search: string): SetSearchAction => ({
  type: SET_SEARCH,
  payload: search
});

export const setUpdate = (update: string): SetUpdateAction => ({
  type: SET_UPDATE,
  payload: update
});

export const clearSearch = (): ClearSearchAction => ({
  type: CLEAR_SEARCH
});

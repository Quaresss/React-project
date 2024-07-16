export const SET_CATEGORY_ID = 'SET_CATEGORY_ID';
export const SET_SORT = 'SET_SORT';

export interface SortObj {
  name: string;
  sortProperty: string;
}

export interface SetCategoryIdAction {
  type: typeof SET_CATEGORY_ID;
  payload: number;
}

export interface SetSortAction {
  type: typeof SET_SORT;
  payload: SortObj;
}

export interface FilterState {
    categoryId: number;
    sort: SortObj;
  }

export type FilterActionTypes = SetCategoryIdAction | SetSortAction;
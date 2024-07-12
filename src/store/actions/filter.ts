export const SET_CATEGORY_ID = 'SET_CATEGORY_ID';
export const SET_SORT = 'SET_SORT';

interface SetCategoryIdAction {
  type: typeof SET_CATEGORY_ID;
  payload: number;
}

export interface SortObj {
  name: string;
  sortProperty: string;
}

interface SetSortAction {
  type: typeof SET_SORT;
  payload: SortObj;
}

export type FilterActionTypes = SetCategoryIdAction | SetSortAction;

export const setCategoryId = (categoryId: number)=> ({
  type: SET_CATEGORY_ID,
  payload: categoryId,
});

export const setSort = (sort: SortObj) => ({
  type: SET_SORT,
  payload: sort,
});
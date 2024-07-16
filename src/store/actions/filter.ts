import {
  SET_CATEGORY_ID,
  SET_SORT,
  SortObj,
  SetCategoryIdAction,
  SetSortAction
} from '@store/types/filter';

export const setCategoryId = (categoryId: number):SetCategoryIdAction => ({
  type: SET_CATEGORY_ID,
  payload: categoryId
});

export const setSort = (sort: SortObj):SetSortAction => ({
  type: SET_SORT,
  payload: sort
});

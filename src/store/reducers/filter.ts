import {
  FilterActionTypes,
  SET_CATEGORY_ID,
  SET_SORT,
  FilterState
} from '@store/types/filter';

const initialState: FilterState = {
  categoryId: 0,
  sort: {
    name: 'популярности',
    sortProperty: 'rating'
  }
};

const filterReducer = (
  state = initialState,
  action: FilterActionTypes
): FilterState => {
  switch (action.type) {
    case SET_CATEGORY_ID:
      return {
        ...state,
        categoryId: action.payload
      };
    case SET_SORT:
      return {
        ...state,
        sort: action.payload
      };
    default:
      return state;
  }
};

export default filterReducer;

import {
  SearchActionTypes,
  SET_SEARCH,
  SET_UPDATE,
  CLEAR_SEARCH,
  SearchState
} from '@store/types/search';

const initialState: SearchState = {
  search: '',
  update: ''
};

const searchReducer = (
  state = initialState,
  action: SearchActionTypes
): SearchState => {
  switch (action.type) {
    case SET_SEARCH:
      return {
        ...state,
        search: action.payload
      };
    case SET_UPDATE:
      return {
        ...state,
        update: action.payload
      };
    case CLEAR_SEARCH:
      return {
        ...state,
        search: '',
        update: ''
      };
    default:
      return state;
  }
};

export default searchReducer;

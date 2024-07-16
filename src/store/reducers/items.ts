import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  itemsState,
  ItemsActionTypes,
  Status
} from '../../store/types/items';

const initialState: itemsState = {
  items: [],
  status: Status.LOADING
};

const itemsReducer = (
  state = initialState,
  action: ItemsActionTypes
): itemsState => {
  switch (action.type) {
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
        items: []
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        items: action.payload
      };
    case FETCH_ITEMS_FAILURE:
      return {
        ...state,
        status: Status.ERROR,
        items: []
      };
    default:
      return state;
  }
};

export default itemsReducer;

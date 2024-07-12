const FETCH_itemS_REQUEST = 'items/fetchitemsRequest';
const FETCH_itemS_SUCCESS = 'items/fetchitemsSuccess';
const FETCH_itemS_FAILURE = 'items/fetchitemsFailure';

// Interfaces and Types
interface item {
  id: number;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface itemsState {
  items: item[];
  status: Status;
}

interface FetchitemsRequestAction {
  type: typeof FETCH_itemS_REQUEST;
}

interface FetchitemsSuccessAction {
  type: typeof FETCH_itemS_SUCCESS;
  payload: item[];
}

interface FetchitemsFailureAction {
  type: typeof FETCH_itemS_FAILURE;
}

type itemsActionTypes = FetchitemsRequestAction | FetchitemsSuccessAction | FetchitemsFailureAction;

const initialState: itemsState = {
  items: [],
  status: Status.LOADING,
};

const itemsReducer = (state = initialState, action: itemsActionTypes): itemsState => {
  switch (action.type) {
    case FETCH_itemS_REQUEST:
      return {
        ...state,
        status: Status.LOADING,
        items: [],
      };
    case FETCH_itemS_SUCCESS:
      return {
        ...state,
        status: Status.SUCCESS,
        items: action.payload,
      };
    case FETCH_itemS_FAILURE:
      return {
        ...state,
        status: Status.ERROR,
        items: [],
      };
    default:
      return state;
  }
};

export default itemsReducer;

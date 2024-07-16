import { Dispatch } from 'redux';
import axios from 'axios';

const FETCH_itemS_REQUEST = 'items/fetchitemsRequest';
const FETCH_itemS_SUCCESS = 'items/fetchitemsSuccess';
const FETCH_itemS_FAILURE = 'items/fetchitemsFailure';

interface item {
  id: number;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
  category: number;
  rating: number;
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

type itemsActionTypes =
  | FetchitemsRequestAction
  | FetchitemsSuccessAction
  | FetchitemsFailureAction;

export const fetchitems = (params: Record<string, string>) => {
  return async (dispatch: Dispatch<itemsActionTypes>) => {
    dispatch({ type: FETCH_itemS_REQUEST });

    try {
      const { category, searchitems, sortType } = params;
      const { data } = await axios.get<item[]>(
        `https://847c80a9e47a2b52.mokky.dev/items?${category}&sortBy=${sortType}${searchitems}`
      );

      dispatch({
        type: FETCH_itemS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: FETCH_itemS_FAILURE });
    }
  };
};

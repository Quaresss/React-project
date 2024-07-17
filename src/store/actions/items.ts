import {
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  ItemsActionTypes,
  item
} from '../../store/types/items';

import { Dispatch } from 'redux';
import axios from 'axios';

export const fetchitems = (params: Record<string, string>) => {
  return async (dispatch: Dispatch<ItemsActionTypes>) => {
    dispatch({ type: FETCH_ITEMS_REQUEST });

    try {
      const { category, searchitems, sortType } = params;
      const { data } = await axios.get<item[]>(
        `https://847c80a9e47a2b52.mokky.dev/items?${category}&sortBy=${sortType}${searchitems}`
      );

      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        payload: data
      });
    } catch (error) {
      dispatch({ type: FETCH_ITEMS_FAILURE });
    }
  };
};

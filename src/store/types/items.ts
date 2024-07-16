export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export interface item {
  id: number;
  img: string;
  title: string;
  types: number[];
  price: number;
  category: number;
  rating: number;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export interface itemsState {
  items: item[];
  status: Status;
}
export interface FetchItemsRequestAction {
  type: typeof FETCH_ITEMS_REQUEST;
}

export interface FetchItemsSuccessAction {
  type: typeof FETCH_ITEMS_SUCCESS;
  payload: item[];
}

export interface FetchItemsFailureAction {
  type: typeof FETCH_ITEMS_FAILURE;
}

export type ItemsActionTypes =
  | FetchItemsRequestAction
  | FetchItemsSuccessAction
  | FetchItemsFailureAction;

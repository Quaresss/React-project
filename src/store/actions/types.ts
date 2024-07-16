export type item = {
  id: number;
  title: string;
  types: Array<number>;
  sizes: Array<number>;
  price: number;
  category: number;
  rating: number;
};

export interface itemsState {
  items: item[];
  status: Status;
}

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error'
}

export const FETCH_itemS_REQUEST = 'FETCH_itemS_REQUEST';
export const FETCH_itemS_SUCCESS = 'FETCH_itemS_SUCCESS';
export const FETCH_itemS_FAILURE = 'FETCH_itemS_FAILURE';

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

export type itemsActionTypes =
  | FetchitemsRequestAction
  | FetchitemsSuccessAction
  | FetchitemsFailureAction;

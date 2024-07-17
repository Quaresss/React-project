export type item = {
  id: number;
  img: string;
  title: string;
  types: Array<number>;
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

export const FETCH_itemS_REQUEST = 'items/fetchitemsRequest';
export const FETCH_itemS_SUCCESS = 'items/fetchitemsSuccess';
export const FETCH_itemS_FAILURE = 'items/fetchitemsFailure';

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

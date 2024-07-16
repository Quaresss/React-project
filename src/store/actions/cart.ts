const ADD_ITEM = 'cart/additem';
const MINUS_ITEM = 'cart/minusitem';
const REMOVE_ITEM = 'cart/removeitem';
const CLEAR_ITEM = 'cart/clearitem';

import { CartItemType } from '@store/types/cart';

export const addItem = (item: CartItemType) => ({
  type: ADD_ITEM as typeof ADD_ITEM,
  payload: item
});

export const minusItem = (itemId: number) => ({
  type: MINUS_ITEM as typeof MINUS_ITEM,
  payload: itemId
});

export const removeItem = (itemId: number) => ({
  type: REMOVE_ITEM as typeof REMOVE_ITEM,
  payload: itemId
});

export const clearItem = () => ({
  type: CLEAR_ITEM as typeof CLEAR_ITEM
});

export type CartActionTypes =
  | ReturnType<typeof addItem>
  | ReturnType<typeof minusItem>
  | ReturnType<typeof removeItem>
  | ReturnType<typeof clearItem>;

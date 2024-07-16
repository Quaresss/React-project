const ADD_item = 'cart/additem';
const MINUS_item = 'cart/minusitem';
const REMOVE_item = 'cart/removeitem';
const CLEAR_item = 'cart/clearitem';

export type CartItemType = {
  id: number;
  title: string;
  type: string;
  size: string;
  price: number;
  count: number;
};

export interface CartState {
  totalPrice: number;
  items: CartItemType[];
}

export const additem = (item: CartItemType) => ({
  type: ADD_item as typeof ADD_item,
  payload: item
});

export const minusitem = (itemId: number) => ({
  type: MINUS_item as typeof MINUS_item,
  payload: itemId
});

export const removeitem = (itemId: number) => ({
  type: REMOVE_item as typeof REMOVE_item,
  payload: itemId
});

export const clearitem = () => ({
  type: CLEAR_item as typeof CLEAR_item
});

export type CartActionTypes =
  | ReturnType<typeof additem>
  | ReturnType<typeof minusitem>
  | ReturnType<typeof removeitem>
  | ReturnType<typeof clearitem>;

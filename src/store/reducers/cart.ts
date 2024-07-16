import { getCartFromLS } from '@utils/getCartFromLS';
import { calcTotalPrice } from '@utils/calcTotalPrice';
import { CartActionTypes } from '../actions/cart';

export interface CartState {
  totalPrice: number;
  items: CartitemType[];
}

export type CartitemType = {
  id: number;
  title: string;
  type: string;
  size: string;
  price: number;
  count: number;
};

const { items, totalPrice } = getCartFromLS();

const initialState: CartState = {
  totalPrice,
  items
};

const ADD_item = 'cart/additem';
const MINUS_item = 'cart/minusitem';
const REMOVE_item = 'cart/removeitem';
const CLEAR_item = 'cart/clearitem';

const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_item:
      const finditem = state.items.find((obj) => obj.id === action.payload.id);

      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
      return { ...state };

    case MINUS_item:
      const finditemMinus = state.items.find(
        (obj) => obj.id === action.payload
      );

      if (finditemMinus) {
        finditemMinus.count--;
      }

      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      return { ...state };

    case REMOVE_item:
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      return { ...state };

    case CLEAR_item:
      state.items = [];
      state.totalPrice = 0;
      return { ...state };

    default:
      return state;
  }
};

export default cartReducer;

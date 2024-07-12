import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../store';
import { getCartFromLS } from '../../utils/getCartFromLS';

export type CartitemType = {
  id: number;
  title: string;
  type: string;
  size: string;
  price: number;
  count: number;
};

export interface CartState {
  totalPrice: number;
  items: CartitemType[];
}

const initialState: CartState = {
  totalPrice: 0,
  items: getCartFromLS(),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    additem(state, action: PayloadAction<CartitemType>) {
      const finditem = state.items.find((obj) => obj.id === action.payload.id);

      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    minusitem(state, action: PayloadAction<number>) {
      const finditem = state.items.find((obj) => obj.id === action.payload);

      if (finditem) {
        finditem.count--;
      }
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },

    removeitem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
    },
    clearitem(state) {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const selectCart = (state: RootState) => state.cart;

export const { additem, removeitem, clearitem, minusitem } = cartSlice.actions;
export default cartSlice.reducer;

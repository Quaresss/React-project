import { getCartFromLS } from '@utils/getCartFromLS';
import { calcTotalPrice } from '@utils/calcTotalPrice';
import { CartActionTypes } from '../actions/cart';
import { CartState} from '@store/types/cart';




const { items, totalPrice } = getCartFromLS();

const initialState: CartState = {
  totalPrice,
  items
};

const ADD_ITEM = 'cart/additem';
const MINUS_ITEM = 'cart/minusitem';
const REMOVE_ITEM = 'cart/removeitem';
const CLEAR_ITEM = 'cart/clearitem';


const cartReducer = (
  state = initialState,
  action: CartActionTypes
): CartState => {
  switch (action.type) {
    case ADD_ITEM :
      const finditem = state.items.find((obj) => obj.id === action.payload.id);

      if (finditem) {
        finditem.count++;
      } else {
        state.items.push({ ...action.payload, count: 1 });
      }

      state.totalPrice = calcTotalPrice(state.items);
      return { ...state };

    case MINUS_ITEM:
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

    case REMOVE_ITEM:
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = state.items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
      return { ...state };

    case CLEAR_ITEM:
      state.items = [];
      state.totalPrice = 0;
      return { ...state };

    default:
      return state;
  }
};

export default cartReducer;
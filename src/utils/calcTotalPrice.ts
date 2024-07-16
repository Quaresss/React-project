import { CartitemType } from '../store/reducers/cart';

export const calcTotalPrice = (items: CartitemType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};

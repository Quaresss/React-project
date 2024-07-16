import { CartItemType } from '@store/types/cart';

export const calcTotalPrice = (items: CartItemType[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0);
};


export type CartItemType = {
  id: number;
  img: string;
  title: string;
  type: string;
  price: number;
  count: number;
};

export interface CartState {
  totalPrice: number;
  items: CartItemType[];
}




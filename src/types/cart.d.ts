type CartItem = {
  id: string;
  name: string;
  price: number;
  sku: string;
  main_image: string;
  options?: Array<{ code: string; value: string | number | boolean }>;
  quantity: number;
};

type ShoppingCart = {
  items: Array<CartItem>;
  amount: number;
};

type CartAction = {
  type: 'ADD_ITEM_ACTION' | 'UPDATE_ITEM_ACTION' | 'REMOVE_ITEM_ACTION' | 'CLEAR_CART_ACTION';
  payload: any;
};

type CartContext = {
  items: Array<CartItem>;
  amount: number;
  dispatch: (action: CartAction) => void;
};

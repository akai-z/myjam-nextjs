import { SHOPPING_CART } from '@contexts/shopping-cart/constants';

export const calculateTotalAmount = (items: Array<CartItem>): number => {
  const fn = (amount: number, item: CartItem): number => amount + item.quantity * item.price;
  return items.reduce(fn, 0);
};

export const setCartStorage = (cart: ShoppingCart): void =>
  localStorage.setItem(SHOPPING_CART, JSON.stringify(cart));

export const getCartStorage = (): CartContext => {
  const cart = localStorage.getItem(SHOPPING_CART);
  return cart ? JSON.parse(cart) : { items: [], amount: 0 };
};

import { SHOPPING_CART } from '@contexts/shopping-cart/constants';
import { IS_CLIENT } from '@config/constants';

export const calculateTotalAmount = (items: Array<CartItem>): number => {
  const fn = (amount: number, item: CartItem): number => amount + item.quantity * item.price;
  return items.reduce(fn, 0);
};

export const setCartStorage = (cart: ShoppingCart): void =>
  IS_CLIENT ? window.localStorage.setItem(SHOPPING_CART, JSON.stringify(cart)) : undefined;

export const getCartStorage = (): CartContext => {
  const cart = IS_CLIENT ? window.localStorage.getItem(SHOPPING_CART) : undefined;
  return cart ? JSON.parse(cart) : { items: [], amount: 0 };
};
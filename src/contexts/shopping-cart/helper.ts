import { SHOPPING_CART } from './constants';
import { IS_CLIENT } from '@config/constants';
import { priceFormatter } from '@utils/helper';

export const calculateTotalAmount = (items: Array<CartItem>): number => {
  const fn = (amount: number, item: CartItem): number =>
    amount + item.quantity * (priceFormatter(item.special_price || item.price, false) as number);
  return priceFormatter(items.reduce(fn, 0), false) as number;
};

export const calculateTotalQuantity = (items: Array<CartItem>): number => {
  const fn = (qty: number, item: CartItem): number => qty + item.quantity;
  return items.reduce(fn, 0);
};

export const setCartStorage = (cart: ShoppingCart): void =>
  IS_CLIENT ? window.localStorage.setItem(SHOPPING_CART, JSON.stringify(cart)) : undefined;

export const getCartStorage = (): CartContext => {
  const cart = IS_CLIENT ? window.localStorage.getItem(SHOPPING_CART) : undefined;
  const initialState = { items: [], amount: 0 };
  if (cart) {
    return JSON.parse(cart);
  } else {
    setCartStorage(initialState);
    // @ts-ignore
    return initialState;
  }
};

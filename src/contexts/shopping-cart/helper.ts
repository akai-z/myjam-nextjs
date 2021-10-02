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

export const setCartStorage = (cart: ShoppingCart): void => {
  const updatedAt = Date.now() / 1000;
  IS_CLIENT ? window.localStorage.setItem(SHOPPING_CART, JSON.stringify({ cart, updatedAt })) : undefined;
}

export const getCartStorage = (): CartContext => {
  const shoppingCart = IS_CLIENT ? window.localStorage.getItem(SHOPPING_CART) : undefined;
  const initialState = { items: [], amount: 0 };
  if (!shoppingCart) {
    setCartStorage(initialState);
    // @ts-ignore
    return initialState;
  }
  const { cart, updatedAt } = JSON.parse(shoppingCart);
  const currentTime = Date.now() / 1000;
  const sessionValidity = 1 * 24 * 60 * 60;
  const isValid = currentTime - updatedAt < sessionValidity;
  if (isValid) {
    return JSON.parse(cart);
  }
  setCartStorage(initialState);
  // @ts-ignore
  return initialState;
};

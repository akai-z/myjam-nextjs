import {
  ADD_ITEM_ACTION,
  UPDATE_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
  CLEAR_CART_ACTION,
} from './constants';
import { calculateTotalAmount, setCartStorage } from '@contexts/shopping-cart/helper';

export default (state: ShoppingCart, action: CartAction): ShoppingCart => {
  const { type, payload } = action;

  if (type === ADD_ITEM_ACTION) {
    const found = state.items.find(({ id }) => payload.id === id);
    const items = !found
      ? state.items.concat(payload)
      : state.items.map((item) =>
          item.id !== payload.id ? item : { ...item, quantity: item.quantity + payload.quantity },
        );
    const updatedState = { items, amount: calculateTotalAmount(items) };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === REMOVE_ITEM_ACTION) {
    const items = state.items.filter(({ id }) => id !== payload.itemId);
    const amount = calculateTotalAmount(items);
    const updatedState = { amount, items };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === UPDATE_ITEM_ACTION) {
    const items = state.items.map((item) =>
      item.id !== payload.itemId ? item : { ...item, quantity: payload.quantity },
    );

    const amount = calculateTotalAmount(items);
    const updatedState = { amount, items };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === CLEAR_CART_ACTION) {
    const updatedState = { items: [], amount: 0 };
    setCartStorage(updatedState);

    return updatedState;
  }

  return state;
};

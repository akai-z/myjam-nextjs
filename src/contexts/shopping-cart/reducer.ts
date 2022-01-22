import {
  ADD_ITEM_ACTION,
  UPDATE_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
  CLEAR_CART_ACTION,
  UPDATE_ITEM_SUBSTITUTE_ACTION,
} from './constants';
import { calculateTotalAmount, getCartStorage, setCartStorage } from './helper';
import { priceFormatter } from '@utils/helper';

const reducer = (state: ShoppingCart, action: CartAction): ShoppingCart => {
  const { type, payload } = action;
  const cart = getCartStorage();
  if (type === ADD_ITEM_ACTION) {
    const found = cart.items.find(({ id }) => payload.id === id);
    const price = priceFormatter(payload.price, false);
    const special_price = payload.special_price ? priceFormatter(payload.special_price, false) : 0;
    const items = !found
      ? cart.items.concat({ ...payload, price, special_price })
      : cart.items.map((item) =>
          item.id !== payload.id ? item : { ...item, quantity: payload.quantity },
        );
    const amount = calculateTotalAmount(items);
    const updatedState = { items, amount };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === REMOVE_ITEM_ACTION) {
    const items = cart.items.filter(({ id }) => id !== payload.itemId);
    const amount = calculateTotalAmount(items);
    const updatedState = { items, amount };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === UPDATE_ITEM_ACTION) {
    const items = cart.items.map((item) =>
      item.id !== payload.itemId ? item : { ...item, quantity: payload.quantity },
    );

    const amount = calculateTotalAmount(items);
    const updatedState = { items, amount };
    setCartStorage(updatedState);

    return updatedState;
  }

  if (type === UPDATE_ITEM_SUBSTITUTE_ACTION) {
    const items = cart.items.map((item) =>
      item.id !== payload.itemId ? item : { ...item, acceptSubstitute: payload.acceptSubstitute },
    );

    const amount = calculateTotalAmount(items);
    const updatedState = { items, amount };
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

export default reducer;

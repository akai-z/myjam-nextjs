import {
  ADD_ITEM_ACTION,
  UPDATE_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
  CLEAR_CART_ACTION,
} from './constants';

export const addItemAction = (item: Item, quantity: number): CartAction => {
  const {
    id,
    fields: { name, sku, price, main_image },
  } = item;
  return {
    type: ADD_ITEM_ACTION,
    payload: { name, id, sku, main_image, quantity, price },
  };
};

export const removeItemAction = (itemId: string): CartAction => ({
  type: REMOVE_ITEM_ACTION,
  payload: { itemId },
});

export const updateItemAction = (itemId: string, quantity: number): CartAction => ({
  type: UPDATE_ITEM_ACTION,
  payload: { itemId, quantity },
});

export const clearCart = (): CartAction => ({
  type: CLEAR_CART_ACTION,
  payload: {},
});

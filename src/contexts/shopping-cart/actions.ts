import {
  ADD_ITEM_ACTION,
  UPDATE_ITEM_ACTION,
  REMOVE_ITEM_ACTION,
  CLEAR_CART_ACTION,
  UPDATE_ITEM_SUBSTITUTE_ACTION,
} from './constants';

export const addItemAction = (
  item: Item,
  quantity: number,
  options: Array<CartItemOptions>,
): CartAction => {
  const {
    id,
    fields: { name, sku, price, main_image, special_price },
  } = item;
  return {
    type: ADD_ITEM_ACTION,
    payload: {
      name,
      id,
      sku,
      main_image,
      quantity,
      price,
      special_price,
      options,
      acceptSubstitute: true,
    },
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

export const updateItemSubstituteAction = (
  itemId: string,
  acceptSubstitute: boolean,
): CartAction => ({
  type: UPDATE_ITEM_SUBSTITUTE_ACTION,
  payload: { itemId, acceptSubstitute },
});

export const clearCart = (): CartAction => ({
  type: CLEAR_CART_ACTION,
  payload: {},
});

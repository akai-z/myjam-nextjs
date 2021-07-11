import React, { ReactNode, useReducer } from 'react';
import { getCartStorage } from './helper';
import reducer from './reducer';

const initialState = getCartStorage();

export const ShoppingCartContext = React.createContext(initialState);

export const useShoppingCart = () => React.useContext(ShoppingCartContext);

export const ShoppingCartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { items, amount } = state;
  return (
    // @ts-ignore
    <ShoppingCartContext.Provider value={{ amount, items, dispatch }}>
      {children}
    </ShoppingCartContext.Provider>
  );
};

import React, { ReactNode, useReducer } from 'react';
import { getCustomerStorage } from './helper';
import reducer from './reducer';

const initialState = getCustomerStorage();

export const CustomerProfileContext = React.createContext(initialState);

export const useCustomerProfile = () => React.useContext(CustomerProfileContext);

export const CustomerProfileProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { phoneNumber } = state;
  return (
    // @ts-ignore
    <CustomerProfileContext.Provider value={{ phoneNumber, dispatch }}>
      {children}
    </CustomerProfileContext.Provider>
  );
};

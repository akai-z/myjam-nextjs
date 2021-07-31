import { CUSTOMER_PROFILE } from './constants';
import { IS_CLIENT } from '@config/constants';

export const setCustomerStorage = (customer: CustomerProfile): void =>
  IS_CLIENT ? window.localStorage.setItem(CUSTOMER_PROFILE, JSON.stringify(customer)) : undefined;

export const getCustomerStorage = (): CustomerContext => {
  const customerProfile = IS_CLIENT ? window.localStorage.getItem(CUSTOMER_PROFILE) : undefined;
  const initialState = { phoneNumber: '' };
  if (customerProfile) {
    return JSON.parse(customerProfile);
  } else {
    setCustomerStorage(initialState);
    // @ts-ignore
    return initialState;
  }
};

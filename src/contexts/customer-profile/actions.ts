import { SET_PHONE_NUMBER_ACTION, CLEAR_CUSTOMER_PROFILE_ACTION } from './constants';

export const setCustomerPhoneNumber = (
  phoneNumber: string,
  countryCode: string,
): CustomerProfileAction => ({
  type: SET_PHONE_NUMBER_ACTION,
  payload: { phoneNumber, countryCode },
});

export const clearCustomerProfile = (): CustomerProfileAction => ({
  type: CLEAR_CUSTOMER_PROFILE_ACTION,
  payload: {},
});

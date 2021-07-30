import { SET_PHONE_NUMBER_ACTION, CLEAR_CUSTOMER_PROFILE_ACTION } from './constants';
import { setCustomerStorage } from './helper';

const reducer = (state: CustomerProfile, action: CustomerProfileAction): CustomerProfile => {
  const { type, payload } = action;

  if (type === SET_PHONE_NUMBER_ACTION) {
    const { phoneNumber, countryCode } = payload;
    const updatedState = { phoneNumber, countryCode };
    setCustomerStorage(updatedState);

    return updatedState;
  }

  if (type === CLEAR_CUSTOMER_PROFILE_ACTION) {
    const updatedState = { phoneNumber: '', countryCode: '' };
    setCustomerStorage(updatedState);

    return updatedState;
  }

  return state;
};

export default reducer;

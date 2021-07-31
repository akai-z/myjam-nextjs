type CustomerProfile = {
  phoneNumber: string;
};

type CustomerProfileAction = {
  type: 'SET_PHONE_NUMBER_ACTION' | 'CLEAR_CUSTOMER_PROFILE_ACTION';
  payload: any;
};

type CustomerContext = {
  phoneNumber: string;
  dispatch: (action: CustomerProfileAction) => void;
};

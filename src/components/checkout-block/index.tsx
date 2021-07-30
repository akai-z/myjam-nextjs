import React, { useEffect, useState } from 'react';
import CartModal from '@components/cart-modal';
import { Wrapper } from './styles';
import { useShoppingCart } from '@contexts/shopping-cart';
import { calculateTotalQuantity } from '@contexts/shopping-cart/helper';
import { IS_CLIENT } from '@config/constants';
import { useCustomerProfile } from '@contexts/customer-profile';
import { TextField } from '@components/fields';

const CheckoutBlock: React.FC = () => {
  const { phoneNumber, countryCode, dispatch } = useCustomerProfile();
  const [phone, setPhoneNumber] = useState('');

  useEffect(() => {
    if (phoneNumber) {
      setPhoneNumber(`${countryCode} ${phoneNumber}`);
    }
  }, []);

  return (
    <Wrapper>
      <TextField
        placeholder="+44 1103555555"
        label="Enter phone number"
        onChange={(val: string) => setPhoneNumber(val)}
        value={phone}
      />
      <h1>PROCEED TO CHECKOUT</h1>
    </Wrapper>
  );
};

export default CheckoutBlock;

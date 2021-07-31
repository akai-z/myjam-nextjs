import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Wrapper, Label, Button } from './styles';
import { useCustomerProfile } from '@contexts/customer-profile';

const CheckoutBlock: React.FC = () => {
  const { phoneNumber, dispatch } = useCustomerProfile();
  const [phone, setPhoneNumber] = useState('');

  const proceedToCheckout = () => {
    alert('PROCEED TO CHECKOUT!');
  };

  useEffect(() => {
    if (phoneNumber) {
      setPhoneNumber(phoneNumber);
    }
  }, []);

  return (
    <Wrapper>
      <Label>Phone Number</Label>
      <PhoneInput
        onlyCountries={['gb']}
        countryCodeEditable={false}
        disableDropdown={true}
        country={'gb'}
        value={phone}
        specialLabel={''}
        onChange={(phoneNum) => setPhoneNumber(phoneNum)}
      />
      <Button onClick={proceedToCheckout}>Proceed to Checkout</Button>
    </Wrapper>
  );
};

export default CheckoutBlock;

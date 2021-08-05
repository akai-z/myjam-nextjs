import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Wrapper, Label, Button } from './styles';
import { useCustomerProfile } from '@contexts/customer-profile';
import { showNotification } from '@utils/notification';
import { setCustomerPhoneNumber } from '@contexts/customer-profile/actions';

interface Props {
  isMobile?: boolean;
}

const CheckoutBlock: React.FC<Props> = ({ isMobile = false }) => {
  const { phoneNumber, dispatch } = useCustomerProfile();
  const [phone, setPhoneNumber] = useState('');

  const proceedToCheckout = () => {
    if (!phone || phone === '44') {
      showNotification('Warning', 'Please enter your phone number', 'danger');
      return;
    }
    dispatch(setCustomerPhoneNumber(phone));
    alert('PROCEED TO CHECKOUT!');
  };

  useEffect(() => {
    if (phoneNumber) {
      setPhoneNumber(phoneNumber);
    }
  }, []);

  return (
    <Wrapper isMobile={isMobile}>
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

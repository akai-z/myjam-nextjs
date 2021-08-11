import React, { useEffect, useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import { Wrapper, Label, Button, LoaderWrapper } from './styles';
import { showNotification } from '@utils/notification';
import { setCustomerPhoneNumber } from '@contexts/customer-profile/actions';
import { createCheckoutSession, lineItemsFormatter } from '@utils/checkout';
import { useShoppingCart, useCustomerProfile, useStripe } from '@contexts/index';
import Loader from '@components/loader';

interface Props {
  isMobile?: boolean;
}

const CheckoutBlock: React.FC<Props> = ({ isMobile = false }) => {
  const { phoneNumber, dispatch } = useCustomerProfile();
  const { items } = useShoppingCart();
  const stripe = useStripe();

  const [phone, setPhoneNumber] = useState('');
  const [isLoading, setLoading] = useState(false);

  const proceedToCheckout = () => {
    if (!phone || phone === '44') {
      showNotification('Warning', 'Please enter your phone number', 'danger');
      return;
    }
    dispatch(setCustomerPhoneNumber(phone));
    const line_items = lineItemsFormatter(items);
    setLoading(true);
    createCheckoutSession(line_items, { phone })
      .then(({ sessionId }) => {
        // @ts-ignore
        return stripe.redirectToCheckout({ sessionId });
      })
      .then((result) => {
        if (result.error) {
          showNotification('Error', 'Something went wrong, please try again later', 'danger');
        }
      })
      .catch(() =>
        showNotification('Error', 'Something went wrong, please try again later', 'danger'),
      );
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
      <Button disabled={isLoading} onClick={proceedToCheckout}>
        <span>Proceed to Checkout</span>{' '}
        {isLoading && (
          <LoaderWrapper>
            <Loader isSpinner={true} loading={true} size={15} color={'#FFF'} />
          </LoaderWrapper>
        )}
      </Button>
    </Wrapper>
  );
};

export default CheckoutBlock;

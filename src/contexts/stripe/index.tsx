import React, { ReactNode, useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '@config/env';

const initialState = undefined;

export const StripeContext = React.createContext(initialState);

export const useStripe = () => React.useContext(StripeContext);

export const StripeProvider = ({ children }: { children: ReactNode }) => {
  const [stripe, setStripe] = useState<any>(initialState);

  useEffect(() => {
    async function initializeStripe() {
      return await loadStripe(STRIPE_PUBLISHABLE_KEY);
    }
    const stripeInstance = initializeStripe();
    setStripe(stripeInstance);
  }, []);

  return <StripeContext.Provider value={stripe}>{children}</StripeContext.Provider>;
};

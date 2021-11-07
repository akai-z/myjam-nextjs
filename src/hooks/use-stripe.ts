import React, { useEffect, useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { STRIPE_PUBLISHABLE_KEY } from '@config/env';

export const useStripe = () => {
  const [stripe, setStripe] = useState<any>(undefined);

  useEffect(() => {
    async function initializeStripe() {
      const stripeInstance = await loadStripe(STRIPE_PUBLISHABLE_KEY);
      setStripe(stripeInstance);
    }
    if (!stripe) {
      initializeStripe();
    }
  }, []);

  return stripe;
};

export default useStripe;

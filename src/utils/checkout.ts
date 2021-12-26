import { APP_URL } from '@config/env';
import { priceFormatter } from '@utils/helper';

export const lineItemsFormatter = (items: Array<CartItem>) =>
  items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      unit_amount: priceFormatter(item.special_price || item.price, false),
      product_data: {
        name: item.name,
        images: [item.main_image],
        metadata: {
          sku: item.sku,
          special_price: item.special_price,
          no_substitute: item.acceptSubstitute,
          options: JSON.stringify(item.options),
        },
      },
    },
  }));

export const createCheckoutSession = async (line_items, metadata) => {
  const response = await fetch(`${APP_URL}/api/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ metadata, line_items }),
  });
  return await response.json();
};

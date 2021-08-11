import { API_URL } from '@config/env';

export const lineItemsFormatter = (items: Array<CartItem>) =>
  items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      unit_amount: item.price,
      product_data: {
        name: item.name,
        images: [item.main_image],
        metadata: {
          sku: item.sku,
          special_price: item.special_price,
          accept_substitute: item.acceptSubstitute,
          options: JSON.stringify(item.options),
        },
      },
    },
  }));

export const createCheckoutSession = async (line_items, metadata) => {
  const response = await fetch(`${API_URL}/create-checkout-session`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ metadata, line_items }),
  });
  return await response.json();
};

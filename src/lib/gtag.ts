import { GOOGLE_ANALYTICS_TRACKING_ID } from '@config/env';

export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GOOGLE_ANALYTICS_TRACKING_ID, {
    page_path: url,
  });
};

export const purchaseEvent = ({
  items,
  currency,
  amount,
}: {
  items: Array<CartItem>;
  currency: string;
  amount: number;
}) => {
  // @ts-ignore
  window.gtag('event', 'purchase', {
    currency,
    value: amount,
    items: items.map((item) => ({
      id: item.sku,
      name: item.name,
      quantity: item.quantity,
      price: item.price,
    })),
  });
};

export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: string | number;
}) => {
  // @ts-ignore
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

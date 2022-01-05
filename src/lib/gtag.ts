import { GOOGLE_ANALYTICS_TRACKING_ID } from '@config/env';

export const pageview = (url: string) => {
  // @ts-ignore
  window.gtag('config', GOOGLE_ANALYTICS_TRACKING_ID, {
    page_path: url,
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

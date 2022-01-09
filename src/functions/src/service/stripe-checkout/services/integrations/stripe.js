const stripe = require('stripe')(process.env.STRIPE_API_SECRET_KEY, stripeOptions);
const HttpError = require('../../../../common/error/http');

const webhookSignatureHeader = 'stripe-signature';
const lineItemsListLimit = 100;

async function createCheckoutSession(lineItems, metadata = {}, shippingRates = []) {
  const payload = checkoutSessionCreationPayload(lineItems, metadata, shippingRates);
  return await stripe.checkout.sessions.create(payload);
}

async function checkoutSession(sessionId, expandedData = []) {
  return await stripe.checkout.sessions.retrieve(sessionId, { expand: expandedData });
}

async function lineItemsList(sessionId) {
  const items = [];
  const options = { limit: lineItemsListLimit, expand: ['data.price.product'] };
  let itemsBatch = [];
  let hasMore = true;

  while (hasMore) {
    itemsBatch = await stripe.checkout.sessions.listLineItems(sessionId, options);
    items.push(...itemsBatch.data);

    hasMore = itemsBatch['has_more'];

    if (hasMore) {
      options['starting_after'] = itemsBatch.data[itemsBatch.data.length - 1].id;
    }
  }

  return items;
}

async function promotionCode(promotionId) {
  return await stripe.promotionCodes.retrieve(promotionId);
}

function completedCheckoutSession(payload, payloadHeaders) {
  const event = webhookEvent(
    payload,
    payloadHeaders,
    process.env.STRIPE_CHECKOUT_SESSION_COMPLETED_WEBHOOK_SECRET,
    'checkout.session.completed',
  );

  return webhookEventData(event);
}

function webhookEvent(payload, payloadHeaders, secret, eventTypes) {
  try {
    const event = constructWebhookEvent(payload, payloadHeaders, secret);

    if (
      (Array.isArray(eventTypes) && !eventTypes.includes(event.type)) ||
      event.type !== eventTypes
    ) {
      throw new HttpError(403);
    }

    return event;
  } catch (err) {
    if (err instanceof HttpError) {
      throw err;
    }

    console.error(err);
    throw new HttpError(400, 'Webhook signature verification failed.');
  }
}

function constructWebhookEvent(payload, payloadHeaders, secret) {
  return stripe.webhooks.constructEvent(payload, payloadHeaders[webhookSignatureHeader], secret);
}

function webhookEventData(event) {
  return event.data.object;
}

function checkoutSessionCreationPayload(lineItems, metadata = {}, shippingRates = []) {
  const payload = {
    mode: process.env.STRIPE_CHECKOUT_SESSION_MODE || 'payment',
    payment_method_types: process.env.STRIPE_PAYMENT_METHOD_TYPES.split(','),
    line_items: lineItems,
    payment_intent_data: {
      capture_method: process.env.STRIPE_PAYMENT_INTENT_CAPTURE_METHOD || 'automatic',
    },
    shipping_address_collection: {
      allowed_countries: process.env.STRIPE_SHIPPING_ADDRESS_ALLOWED_COUNTRIES.split(','),
    },
    allow_promotion_codes: process.env.STRIPE_PROMOTION_CODES_ENABLED || false,
    metadata: metadata || {},
    success_url: `${process.env.STRIPE_DOMAIN}/${process.env.STRIPE_SUCCESS_URL_PATH}`,
    cancel_url: `${process.env.STRIPE_DOMAIN}/${process.env.STRIPE_CANCEL_URL_PATH}`,
  };

  if (payload.mode === 'payment') {
    payload.shipping_rates = shippingRates;
  }

  return payload;
}

function stripeOptions() {
  const options = {};

  if (process.env.STRIPE_MAX_NETWORK_RETRIES) {
    options.maxNetworkRetries = process.env.STRIPE_MAX_NETWORK_RETRIES;
  }

  if (process.env.STRIPE_TIMEOUT) {
    options.timeout = process.env.STRIPE_TIMEOUT;
  }

  return options;
}

module.exports = {
  createCheckoutSession,
  checkoutSession,
  lineItemsList,
  promotionCode,
  completedCheckoutSession,
};

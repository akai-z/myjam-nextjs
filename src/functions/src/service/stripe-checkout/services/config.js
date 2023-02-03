'use strict';

const airtable = require('./integrations/airtable');

const configAirtableView = 'Config';

async function freeShippingSubtotal() {
  const config = await airtable.findRecordByField(
    configAirtableView,
    '{code}',
    'free_shipping_subtotal',
  );

  return config !== null && typeof config.fields.value !== 'undefined'
    ? parseFloat(config.fields.value)
    : null;
}

module.exports = {
  freeShippingSubtotal,
};

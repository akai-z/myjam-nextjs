const airtable = require('./integrations/airtable')

async function freeShippingSubtotal() {
  const config = await airtable.findRecordByField(
    process.env.AIRTABLE_ORDER_CONFIG_VIEW,
    '{code}',
    'free_shipping_subtotal'
  )

  return config !== null && typeof config.fields.value !== 'undefined'
    ? parseFloat(config.fields.value) : null
}

module.exports = {
  freeShippingSubtotal
}

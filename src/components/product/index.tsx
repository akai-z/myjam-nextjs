import React, { useState } from 'react';
import { Wrapper, Title, Price, Text, FlexWrapper, OldPrice, GridWrapper } from './styles';
import ImageSlider from '@components/image-slider';
import AddToCart from '@components/add-to-cart';
import { normalizeData, priceFormatter } from '@utils/helper';
import { TextField, SelectField } from '@components/fields';
import { useShoppingCart } from '@contexts/shopping-cart';

interface Props {
  item: Item;
  optionsList: Array<CustomOption>;
}

const Product: React.FC<Props> = ({ item, optionsList }) => {
  const { items } = useShoppingCart();
  const options = normalizeData(optionsList);

  const getCartItem = () => items.find(({ id }) => id === item.id);

  const getSelectedValue = (optionCode: string) =>
    getCartItem()?.options?.find((option) => option.code === optionCode);

  const optionsInitialState = item.fields.options
    ? item.fields.options.reduce((acc: any, optionId: string) => {
        const option = options[optionId];
        acc[option.fields.code] = getCartItem() ? getSelectedValue(option.fields.code)?.value : '';
        return acc;
      }, {})
    : {};

  const [optionsValues, setOptionValue] = useState(optionsInitialState);
  const [addItemTriggered, setAddItemTrigger] = useState(false);

  const handleChange = (code: string) => (val: string) =>
    setOptionValue((preState: Object) => ({ ...preState, [code]: val }));

  const renderCustomOptions = () =>
    item.fields.options?.map((optionId) => {
      const option = options[optionId];
      const { code, label, values, type } = option.fields;
      if (type === 'text') {
        return (
          <TextField
            key={optionId}
            label={label}
            hasError={!Boolean(optionsValues[code]) && addItemTriggered}
            errorMessage="Required field"
            value={optionsValues[code]}
            onChange={handleChange(code)}
          />
        );
      }
      if (type === 'select') {
        return (
          <SelectField
            key={optionId}
            label={label}
            hasError={!Boolean(optionsValues[code]) && addItemTriggered}
            errorMessage="Required field"
            value={optionsValues[code]}
            options={values ? values.split('|') : []}
            onChange={handleChange(code)}
          />
        );
      }
      return <React.Fragment />;
    });

  const LayoutWrapper = item.fields.options ? GridWrapper : FlexWrapper;

  return (
    <Wrapper>
      <div id="product_images">
        <ImageSlider images={[item.fields.main_image]} />
      </div>
      <div id="product_details">
        <Title>{item.fields.name}</Title>
        <LayoutWrapper>
          {item.fields.special_price && item.fields.special_price > 0 ? (
            <div>
              <OldPrice>{priceFormatter(item.fields.price)}</OldPrice>
              <Price>{priceFormatter(item.fields.special_price)}</Price>
            </div>
          ) : (
            <Price>{priceFormatter(item.fields.price)}</Price>
          )}
          {renderCustomOptions()}
          <AddToCart
            item={item}
            selectedOptions={optionsValues}
            onAddItem={() => setAddItemTrigger(true)}
          />
        </LayoutWrapper>
        <Text>{item.fields.description}</Text>
      </div>
    </Wrapper>
  );
};

export default Product;

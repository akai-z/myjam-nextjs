import React, { useState, useEffect } from 'react';
import { Wrapper, Title, Price, Text, FlexWrapper, OldPrice, GridWrapper } from './styles';
import ImageSlider from '@components/image-slider';
import AddToCart from '@components/add-to-cart';
import { normalizeData, priceFormatter } from '@utils/helper';
import { TextField, SelectField } from '@components/fields';
import { useShoppingCart } from '@contexts/shopping-cart';
import { fetchCustomOptions } from '@lib/queries/items';

type Props = {
  item: Item;
};

const Product: React.FC<Props> = ({ item }) => {
  const { items } = useShoppingCart();
  const { optionsList, isLoading } = fetchCustomOptions();

  const [optionsValues, setOptionValue] = useState({});
  const [addItemTriggered, setAddItemTrigger] = useState(false);

  const getCartItem = () => items.find(({ id }) => id === item.id);

  const getSelectedValue = (optionCode: string) =>
    getCartItem()?.options?.find((option) => option.code === optionCode);

  useEffect(() => {
    if (!isLoading && optionsList.length > 0) {
      const options = normalizeData(optionsList);
      const optionsInitialState =
        item.options.length > 0
          ? item.options.reduce((acc: any, optionId: string) => {
              const option = options[optionId];
              acc[option.fields.code] = getCartItem()
                ? getSelectedValue(option.fields.code)?.value
                : '';
              return acc;
            }, {})
          : {};

      setOptionValue(optionsInitialState);
    }
  }, [optionsList]);

  const handleChange = (code: string) => (val: string) =>
    setOptionValue((preState: Record<string, any>) => ({ ...preState, [code]: val }));

  const renderCustomOptions = () =>
    item.options?.map((optionId) => {
      const options = normalizeData(optionsList);
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
      return <React.Fragment key={Math.random()} />;
    });

  const LayoutWrapper = item.options.length > 0 ? GridWrapper : FlexWrapper;

  return (
    <Wrapper>
      <div id="product_images">
        <ImageSlider images={[item.main_image]} />
      </div>
      <div id="product_details">
        <Title>{item.name}</Title>
        <LayoutWrapper>
          {item.special_price && Number(item.special_price) > 0 ? (
            <div>
              <OldPrice>{priceFormatter(item.price)}</OldPrice>
              <Price>{priceFormatter(item.special_price)}</Price>
            </div>
          ) : (
            <Price>{priceFormatter(item.price)}</Price>
          )}
          {!isLoading && renderCustomOptions()}
          <AddToCart
            item={item}
            selectedOptions={optionsValues}
            onAddItem={() => setAddItemTrigger(true)}
          />
        </LayoutWrapper>
        <Text>{item.description}</Text>
      </div>
    </Wrapper>
  );
};

export default Product;

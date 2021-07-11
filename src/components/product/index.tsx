import React, { useState } from 'react';
import { Wrapper, Title, Price, Text, FlexWrapper, AddItemButton, GridWrapper } from './styles';
import ImageSlider from '@components/image-slider';
import { normalizeData, priceFormatter } from '@utils/helper';
import { TextField, SelectField } from '@components/fields';
import { useShoppingCart } from '@contexts/shopping-cart';

interface Props {
  item: Item;
  optionsList: Array<CustomOption>;
}

const Product: React.FC<Props> = ({ item, optionsList }) => {
  const options = normalizeData(optionsList);
  const { items, amount, dispatch } = useShoppingCart();

  console.log({ items, amount, dispatch });

  const initialState = item.fields.options
    ? item.fields.options.reduce((acc: any, optionId: string) => {
        const option = options[optionId];
        acc[option.fields.code] = '';
        return acc;
      }, {})
    : {};

  const [optionsValues, setOptionValue] = useState(initialState);

  const renderCustomOptions = () =>
    item.fields.options?.map((optionId) => {
      const option = options[optionId];
      const { code, label, values, type } = option.fields;
      if (type === 'text') {
        return (
          <TextField
            key={optionId}
            label={label}
            value={optionsValues[code]}
            onChange={(val: string) =>
              setOptionValue((preState: Object) => ({ ...preState, [code]: val }))
            }
          />
        );
      }
      if (type === 'select') {
        return (
          <SelectField
            key={optionId}
            label={label}
            value={optionsValues[code]}
            options={values ? values.split('|') : []}
            onChange={(val: string) =>
              setOptionValue((preState: Object) => ({ ...preState, [code]: val }))
            }
          />
        );
      }
      return <React.Fragment />;
    });

  return (
    <Wrapper>
      <div id="product_images">
        <ImageSlider images={[item.fields.main_image]} />
      </div>
      <div id="product_details">
        <Title>{item.fields.name}</Title>
        {item.fields.options ? (
          <GridWrapper>
            <Price>{priceFormatter(item.fields.price)}</Price>
            {renderCustomOptions()}
            <div>
              <AddItemButton>Add To Cart</AddItemButton>
            </div>
          </GridWrapper>
        ) : (
          <FlexWrapper>
            <Price>{priceFormatter(item.fields.price)}</Price>
            <div>
              <AddItemButton>Add To Cart</AddItemButton>
            </div>
          </FlexWrapper>
        )}
        <Text>{item.fields.description}</Text>
      </div>
    </Wrapper>
  );
};

export default Product;

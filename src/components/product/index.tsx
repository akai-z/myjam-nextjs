import React from 'react';
import { Wrapper, Title, Price, Text, FlexWrapper, AddItemButton, GridWrapper } from './styles';
import ImageSlider from '@components/image-slider';
import { priceFormatter } from '@utils/helper';
import { TextAreaField, TextField, SelectField } from '@components/fields';

interface Props {
  item: Item;
}

const Product: React.FC<Props> = ({ item }) => {
  return (
    <Wrapper>
      <div id="product_images">
        <ImageSlider
          images={[
            'https://dummyimage.com/600x600/fff/000.jpg',
            'https://dummyimage.com/600x600/fff/000.jpg',
            'https://dummyimage.com/600x600/fff/000.jpg',
          ]}
        />
      </div>
      <div id="product_details">
        <Title>{item.fields.name}</Title>
        {item.fields.options ? (
          <GridWrapper>
            <Price>{priceFormatter(item.fields.price)}</Price>
            <TextField
              value="test"
              onChange={(val: string) => console.log(val)}
              label="Text field"
            />
            <TextAreaField
              value="test"
              onChange={(val: string) => console.log(val)}
              label="Textarea field"
            />
            <SelectField
              label="Select field"
              value="option 2"
              options={['option 1', 'option 2']}
              onChange={(val: string) => console.log(val)}
            />
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

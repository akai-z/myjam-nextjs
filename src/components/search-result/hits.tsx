import React from 'react';
import { connectHits } from 'react-instantsearch-dom';
import Image from 'next/image';
import ItemsGrid from '@components/items-grid';
import { imgUrlBuilder } from '@utils/helper';
import { Wrapper, Block, Text, SubText } from './styles';

interface Props {
  hits: any;
}
const Hits: React.FC<Props> = ({ hits }) => (
  <Wrapper>
    {hits.length > 0 ? (
      <ItemsGrid itemsList={hits.map((hit) => ({ id: hit.id, fields: { ...hit } }))} />
    ) : (
      <Block>
        <Image
          src={imgUrlBuilder('no-result-found.svg')}
          height={250}
          width={300}
          alt="No Result Found"
        />
        <Text>No Items Found :(</Text>
        <SubText>Sorry, no items found inside your search</SubText>
      </Block>
    )}
  </Wrapper>
);

export default connectHits(Hits);

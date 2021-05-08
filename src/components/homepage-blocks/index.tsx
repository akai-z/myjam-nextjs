import React from 'react';
import {
  Wrapper,
  SupportIcon,
  BoxIcon,
  DeliveryIcon,
  PaymentIcon,
  Title,
  Block,
  Description,
} from './styles';

const Blocks: React.FC = () => {
  const blocks = [
    {
      icon: BoxIcon,
      title: 'Free Delivery',
      note: 'For all orders over $100',
    },
    {
      icon: DeliveryIcon,
      title: 'Cover all UK',
      note: 'Delivery to all UK',
    },
    {
      icon: PaymentIcon,
      title: 'Secure Payment',
      note: '100% secure payment',
    },
    {
      icon: SupportIcon,
      title: 'Customer Support',
      note: 'We have dedicated support',
    },
  ];
  return (
    <Wrapper>
      {blocks.map((block, index) => (
        <Block key={index}>
          <block.icon />
          <div>
            <Title>{block.title}</Title>
            <Description>{block.note}</Description>
          </div>
        </Block>
      ))}
    </Wrapper>
  );
};

export default Blocks;

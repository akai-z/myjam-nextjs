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
      title: '+5,000 products',
      note: 'Arabic, Turkish, Greek and Iranian cultures',
    },
    {
      icon: DeliveryIcon,
      title: 'UK mainland',
      note: 'Delivered in 2-3 working days',
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

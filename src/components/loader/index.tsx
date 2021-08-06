import React from 'react';
import { css } from '@emotion/react';
import SyncLoader from 'react-spinners/SyncLoader';
import { Wrapper } from './styles';

interface Props {
  loading: boolean;
  size: number;
  color?: string;
}

const Loader: React.FC<Props> = ({ loading, size, color = '#1f2937' }) => (
  <Wrapper>
    <SyncLoader color={color} loading={loading} size={size} />
  </Wrapper>
);

export default Loader;

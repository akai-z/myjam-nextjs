import React from 'react';
import SyncLoader from 'react-spinners/SyncLoader';
import ClipLoader from 'react-spinners/ClipLoader';
import { Wrapper } from './styles';

interface Props {
  loading: boolean;
  size: number;
  color?: string;
  isSpinner?: boolean;
}

const Loader: React.FC<Props> = ({ loading, size, color = '#1f2937', isSpinner = false }) => {
  const LoaderComponent = isSpinner ? ClipLoader : SyncLoader;
  return (
    <Wrapper>
      <LoaderComponent color={color} loading={loading} size={size} />
    </Wrapper>
  );
};

export default Loader;

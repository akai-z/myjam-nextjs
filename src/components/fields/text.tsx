import React, { useState, useEffect } from 'react';
import { Wrapper, Input, ErrorMessage, Label } from './styles';

interface Props {
  label: string;
  value: string | undefined;
  onChange: Function;
  hasError?: boolean;
  errorMessage?: string;
}

export const TextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  hasError = false,
  errorMessage = '',
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    onChange(val);
  }, [val]);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input type="text" value={val} onChange={handleChange} />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

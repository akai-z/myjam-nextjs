import React, { useState, useEffect } from 'react';
import { Wrapper, Input, ErrorMessage, Label } from './styles';

interface Props {
  label: string;
  value?: string;
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
      <Input hasError={hasError && !val} type="text" value={val} onChange={handleChange} />
      {hasError && !val && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

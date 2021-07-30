import React, { useState, useEffect } from 'react';
import { Wrapper, Input, ErrorMessage, Label } from './styles';

interface Props {
  label: string;
  value?: string;
  onChange: Function;
  hasError?: boolean;
  errorMessage?: string;
  placeholder?: string;
}

export const TextField: React.FC<Props> = ({
  label,
  value,
  onChange,
  hasError = false,
  errorMessage = '',
  placeholder = '',
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Input
        placeholder={placeholder}
        hasError={hasError && !val}
        type="text"
        value={val}
        onChange={handleChange}
      />
      {hasError && !val && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

import React, { useState, useEffect } from 'react';
import { Wrapper, TextArea, ErrorMessage, Label } from './styles';

interface Props {
  label: string;
  value: string | undefined;
  onChange: Function;
  hasError?: boolean;
  errorMessage?: string;
}

export const TextAreaField: React.FC<Props> = ({
  label,
  value,
  onChange,
  hasError = false,
  errorMessage = '',
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setVal(event.target.value);
  };

  useEffect(() => {
    onChange(val);
  }, [val]);
  return (
    <Wrapper>
      <Label>{label}</Label>
      <TextArea value={val} onChange={handleChange} rows={5} />
      {hasError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

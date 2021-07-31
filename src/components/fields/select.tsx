import React, { useState, useEffect } from 'react';
import { Wrapper, ErrorMessage, Label, Select } from './styles';

interface Props {
  label: string;
  value: string | undefined;
  options: Array<string>;
  onChange: Function;
  hasError?: boolean;
  errorMessage?: string;
}

export const SelectField: React.FC<Props> = ({
  label,
  value,
  onChange,
  options,
  hasError = false,
  errorMessage = '',
}) => {
  const [val, setVal] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value);
  };

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <Wrapper>
      <Label>{label}</Label>
      <Select hasError={hasError && !val} value={val} onChange={handleChange}>
        <option value="">Please Select</option>
        {options.map((val, index) => (
          <option key={index} value={val}>
            {val}
          </option>
        ))}
      </Select>
      {hasError && !val && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </Wrapper>
  );
};

import React, { useState, useEffect } from 'react';
import { Input, Label, CheckBoxWrapper, CheckBlock, CheckIcon } from './styles';

type Props = {
  label: string;
  value: boolean;
  onChange: (val: boolean) => void;
};

export const CheckBoxField: React.FC<Props> = ({ label, value, onChange }) => {
  const [val, setVal] = useState(value);

  const handleChange = () => onChange(!val);

  useEffect(() => {
    setVal(value);
  }, [value]);

  return (
    <CheckBoxWrapper>
      <CheckBlock checked={val}>{val && <CheckIcon />}</CheckBlock>
      <Input type="checkbox" checked={val} onChange={handleChange} hidden={true} />
      <Label>{label}</Label>
    </CheckBoxWrapper>
  );
};

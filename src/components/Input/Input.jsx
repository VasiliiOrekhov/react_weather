import React, { useState } from 'react';
import styled from 'styled-components';

export const Input = ({ placehold, error, type, onChange }) => {
  const [inputValue, setInputValue] = useState('');
  const onInputChange = (e) => {
    onChange(e);
    setInputValue(e.target.value);
  };

  return (
    <Container>
      <InputField value={inputValue} type={type} onChange={onInputChange} />
      <InputPlaceholder>{placehold}</InputPlaceholder>
      {error && <InputError>{error}</InputError>}
    </Container>
  );
};

const InputField = styled('input')`
  border: none;
  border-bottom: 1px solid #3369f3;
  width: 280px;
  background: none;
  color: #1e1e1e;
  outline: none;
`;
const InputPlaceholder = styled('p')`
  position: absolute;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  left: 0;
  color: #999999;
`;
const Container = styled('div')`
  position: relative;

  ${InputField}[value=''] ~ ${InputPlaceholder} {
    font-size: 13px;
    line-height: 13px;
    bottom: 3px;
  }
  ${InputField}:not([value='']) ~ ${InputPlaceholder} {
    font-size: 9px;
    line-height: 9px;
    bottom: 20px;
  }
`;

const InputError = styled('p')`
  position: absolute;
  left: 0;
  top: 17px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 8px;
  line-height: 8px;
  color: #ff2f2f;
  margin-top: 7px;
`;

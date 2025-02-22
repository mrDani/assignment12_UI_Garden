import React from 'react';
import styled from 'styled-components';
import { RadioButtonProps } from './RadioButton.types';

const StyledRadio = styled.label<Omit<RadioButtonProps, 'options' | 'onChange'>>`
  display: block;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
  margin-bottom: 5px;
`;

const RadioButton: React.FC<RadioButtonProps> = ({ options, selected, onChange, disabled }) => {
  return (
    <>
      {options.map((option, index) => (
        <StyledRadio key={index} disabled={disabled}>
          <input
            type="radio"
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            disabled={disabled}
          />
          {option}
        </StyledRadio>
      ))}
    </>
  );
};

export default RadioButton;

import React from 'react';
import styled from 'styled-components';
import { DropdownProps } from './Dropdown.types';

const StyledSelect = styled.select<Omit<DropdownProps, 'options' | 'onChange'>>`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;

const Dropdown: React.FC<DropdownProps> = ({
  options,
  selected,
  onChange,
  disabled,
}) => {
  return (
    <StyledSelect
      value={selected}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
    >
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Dropdown;

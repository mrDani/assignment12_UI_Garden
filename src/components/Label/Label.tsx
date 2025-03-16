import React from 'react';
import styled from 'styled-components';
import { LabelProps } from './Label.types';

const StyledLabel = styled.span<Omit<LabelProps, 'text'>>`
  color: ${({ color, disabled }) => (disabled ? '#ccc' : color || '#000')};
  font-size: 14px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: color 0.3s ease;
`;

const Label: React.FC<LabelProps> = ({ text, color, disabled }) => {
  return (
    <StyledLabel color={color} disabled={disabled}>
      {text}
    </StyledLabel>
  );
};

export default Label;

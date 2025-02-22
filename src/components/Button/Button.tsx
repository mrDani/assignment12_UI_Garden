import React from 'react';
import styled from 'styled-components';
import { ButtonProps } from './Button.types';

// Use Omit to remove custom props from native button attributes
const StyledButton = styled.button<Omit<ButtonProps, 'text'>>`
  background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ff69b4')};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ disabled }) => (disabled ? '#ccc' : '#ff1493')};
  }
`;

const Button: React.FC<ButtonProps> = ({ text, onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {text}
  </StyledButton>
);

export default Button;

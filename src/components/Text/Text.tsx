import React from 'react';
import styled from 'styled-components';
import { TextProps } from './Text.types';

const StyledText = styled.p<Omit<TextProps, 'content'>>`
  color: ${({ color, disabled }) => (disabled ? '#ccc' : color || '#000')};
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '14px';
      case 'large':
        return '24px';
      default:
        return '18px';
    }
  }};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: color 0.3s ease;
`;

const Text: React.FC<TextProps> = ({ content, color, size, disabled }) => {
  return (
    <StyledText color={color} size={size} disabled={disabled}>
      {content}
    </StyledText>
  );
};

export default Text;

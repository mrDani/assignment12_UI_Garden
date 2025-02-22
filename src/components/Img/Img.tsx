import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

const StyledImg = styled.img<Omit<ImgProps, 'src' | 'alt'>>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: opacity 0.3s ease;
  border-radius: 10px;
`;

const Img: React.FC<ImgProps> = ({ src, alt, width, height, disabled }) => {
  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;

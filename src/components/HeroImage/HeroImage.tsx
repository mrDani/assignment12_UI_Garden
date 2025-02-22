import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<Omit<HeroImageProps, 'title' | 'subtitle'>>`
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 300px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: opacity 0.3s ease;
`;

const HeroTitle = styled.h1`
  font-size: 36px;
  margin: 0;
`;

const HeroSubtitle = styled.p`
  font-size: 18px;
`;

const HeroImage: React.FC<HeroImageProps> = ({ backgroundImage, title, subtitle, disabled }) => {
  return (
    <HeroContainer backgroundImage={backgroundImage} disabled={disabled}>
      <HeroTitle>{title}</HeroTitle>
      {subtitle && <HeroSubtitle>{subtitle}</HeroSubtitle>}
    </HeroContainer>
  );
};

export default HeroImage;

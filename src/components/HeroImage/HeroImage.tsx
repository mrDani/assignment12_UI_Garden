import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

const HeroContainer = styled.div<{ $imageSrc: string }>`
  background-image: url(${({ $imageSrc }) => $imageSrc});
  background-size: cover;
  background-position: center;
  padding: 50px;
  text-align: center;
  color: white;
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageSrc,
  title,
  description,
  disabled = false,
}) => (
  <HeroContainer $imageSrc={imageSrc} style={{ opacity: disabled ? 0.5 : 1 }}>
    <h1>{title}</h1>
    <p>{description}</p>
  </HeroContainer>
);

export default HeroImage;

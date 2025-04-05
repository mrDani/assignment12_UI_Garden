import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: #1e3d59;
  cursor: pointer;
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;

  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: #00bfff;
  margin: 0 0 10px;
`;

const CardDescription = styled.p`
  font-size: 1rem;
  color: #ddd;
  flex-grow: 1;
`;

const CardButton = styled.button`
  background-color: #00bfff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e90ff;
  }
`;

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  buttonLabel,
  onButtonClick,
}) => {
  return (
    <CardContainer onClick={onButtonClick}>
      {imageSrc && <CardImage src={imageSrc} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton>{buttonLabel}</CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

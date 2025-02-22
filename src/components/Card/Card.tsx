import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

const CardContainer = styled.div<Omit<CardProps, 'title' | 'description' | 'buttonLabel' | 'onButtonClick' | 'imageSrc'>>`
  width: 300px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  background: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};
  transition: opacity 0.3s ease;
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 15px;
`;

const CardTitle = styled.h3`
  font-size: 20px;
  margin: 0;
  color: #333;
`;

const CardDescription = styled.p`
  font-size: 14px;
  color: #777;
  margin: 10px 0;
`;

const CardButton = styled.button<{ disabled?: boolean }>`
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

const Card: React.FC<CardProps> = ({ imageSrc, title, description, buttonLabel, onButtonClick, disabled }) => {
  return (
    <CardContainer disabled={disabled}>
      {imageSrc && <CardImage src={imageSrc} alt={title} />}
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardButton onClick={onButtonClick} disabled={disabled}>
          {buttonLabel}
        </CardButton>
      </CardContent>
    </CardContainer>
  );
};

export default Card;

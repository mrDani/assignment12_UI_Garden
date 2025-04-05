import React from 'react';
import styled, { keyframes } from 'styled-components';

const starAnimation = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-1000px); }
`;

const Stars = styled.div`
  width: 1px;
  height: 1px;
  background: white;
  position: absolute;
  border-radius: 50%;
  box-shadow: 0 0 2px white;
  animation: ${starAnimation} 100s linear infinite;
`;

const AnimatedBackground: React.FC = () => {
  const starElements = Array.from({ length: 100 }, (_, index) => (
    <Stars key={index} style={{
      top: `${Math.random() * 100}vh`,
      left: `${Math.random() * 100}vw`,
      animationDuration: `${Math.random() * 200 + 100}s`
    }} />
  ));

  return <div className="stars">{starElements}</div>;
};

export default AnimatedBackground;

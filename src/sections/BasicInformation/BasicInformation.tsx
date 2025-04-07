import React from 'react';
import styled from 'styled-components';

const BasicInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;
  background: linear-gradient(135deg, #0a0a0a, #0d1a2b);
  padding: 0;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-bottom: 20px;
  color: #4db8ff;
  text-shadow: 0 0 10px #4db8ff;
  animation: fadeIn 2s ease-in-out;
`;

const InfoText = styled.p`
  font-size: 1.2rem;
  margin: 5px 0;
  color: #ffffff;
  animation: fadeIn 2s ease-in-out;
`;

const Link = styled.a`
  color: #4db8ff;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #00ccff;
    text-decoration: underline;
  }
`;

const BasicInformation: React.FC = () => {
  return (
    <BasicInformationContainer>
      <Title>Daniel Babalola Portfolio</Title>
      <InfoText>
        Email:{' '}
        <Link href="mailto:babaloladaniel2k@gmail.com">
          babaloladaniel2k@gmail.com
        </Link>
      </InfoText>
      <InfoText>
        LinkedIn:{' '}
        <Link
          href="https://www.linkedin.com/in/daniel-babalola-a20501219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          linkedin.com/in/danielbabalola
        </Link>
      </InfoText>
      <InfoText>
        GitHub:{' '}
        <Link
          href="https://github.com/mrDani"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/mrDani
        </Link>
      </InfoText>
    </BasicInformationContainer>
  );
};

export default BasicInformation;

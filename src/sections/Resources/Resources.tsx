import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/CommonStyles';

const ResourcesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  padding: 30px;
  background-color: #223f6b;
  border-radius: 10px;
`;

const ResourceCard = styled.div`
  background-color: #1e3d59;
  padding: 20px;
  border-radius: 10px;
  color: white;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const resources = [
  { title: 'React Docs', link: 'https://reactjs.org/' },
  { title: 'StyledComponents', link: 'https://styled-components.com/' },
  { title: 'Rails Guides', link: 'https://guides.rubyonrails.org/' },
  { title: 'MDN Web Docs', link: 'https://developer.mozilla.org/' },
  { title: 'Stripe Documentation', link: 'https://stripe.com/docs' },
];

const Resources = () => (
  <SectionContainer id="resources">
    <SectionTitle>Resources</SectionTitle>
    <ResourcesContainer>
      {resources.map((resource, index) => (
        <ResourceCard key={index}>
          <h3>{resource.title}</h3>
          <a href={resource.link} target="_blank" rel="noopener noreferrer">
            Visit
          </a>
        </ResourceCard>
      ))}
    </ResourcesContainer>
  </SectionContainer>
);

export default Resources;

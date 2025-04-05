import React from 'react';
import styled from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/CommonStyles';

const SetupContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  background-color: #2b4f7f;
  padding: 30px;
  border-radius: 10px;
`;

const ToolCard = styled.div`
  background-color: #1e3d59;
  padding: 20px;
  border-radius: 10px;
  color: white;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const tools = [
  { name: 'VSCode', description: 'My preferred code editor with various extensions.' },
  { name: 'Terminal', description: 'Customized with themes and plugins for productivity.' },
  { name: 'Docker', description: 'Used for containerization and deployment.' },
  { name: 'Git & GitHub', description: 'Version control and collaboration tools.' },
];

const DeveloperSetup = () => (
  <SectionContainer id="developer-setup">
    <SectionTitle>Developer Setup</SectionTitle>
    <SetupContainer>
      {tools.map((tool, index) => (
        <ToolCard key={index}>
          <h3>{tool.name}</h3>
          <p>{tool.description}</p>
        </ToolCard>
      ))}
    </SetupContainer>
  </SectionContainer>
);

export default DeveloperSetup;

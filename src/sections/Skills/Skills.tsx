import React from 'react';
import styled, { keyframes } from 'styled-components';
import { SectionContainer, SectionTitle } from '../../styles/CommonStyles';

const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  background-color: #1a1a40;
  padding: 30px;
`;

const SkillCard = styled.div`
  background-color: #1e3d59;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  color: white;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

const marquee = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const MarqueeContainer = styled.div`
  overflow: hidden;
  white-space: nowrap;
  margin-top: 30px;
  padding: 10px 0;
  background-color: #121212;
  border-radius: 10px;
`;

const Marquee = styled.div`
  display: inline-block;
  white-space: nowrap;
  animation: ${marquee} 45s linear infinite;
  color: #00bfff;
  font-size: 1.2rem;
`;

const skills = [
  'React', 'Ruby on Rails', 'JavaScript', 'PHP', 
   'HTML', 'CSS', 'Python', 'Django',
  'Java', 'Git', 'Docker', 'TypeScript', 
   'Bootstrap', 'Debugging', 'MySQL',
];

const marqueeSkills = [
  'Python', 'Django', 'Java', 'Node.js', 'Express', 'Git', 'Docker', 
  'Agile Development', 'RESTful APIs', 'Bootstrap', 'Laravel', 'Debugging',
  'Unit Testing', 'React Testing Library', 'GitHub Actions', 'CI/CD Pipelines'
];

const Skills: React.FC = () => (
  <SectionContainer id="skills">
    <SectionTitle>Skills</SectionTitle>
    <SkillsContainer>
      {skills.map((skill, index) => (
        <SkillCard key={index}>{skill}</SkillCard>
      ))}
    </SkillsContainer>
    <MarqueeContainer>
      <Marquee>
        {marqueeSkills.join(' • ')}
      </Marquee>
    </MarqueeContainer>
  </SectionContainer>
);

export default Skills;

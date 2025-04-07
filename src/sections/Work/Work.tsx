import React from 'react';
import styled from 'styled-components';
import Card from '../../components/Card/Card';
import { SectionContainer, SectionTitle } from '../../styles/CommonStyles';

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  min-height: 300px;
`;

const projects = [
  {
    id: 1,
    title: 'Pianocella (Ecommerce App)',
    description:
      'Ecommerce platform built with Ruby on Rails, React, and Stripe integration.',
    imageSrc:
      'https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg',
    link: 'https://github.com/mrDani/Pianocella_Ecommerce',
    tech: ['Ruby on Rails', 'React', 'Stripe'],
  },
  {
    id: 2,
    title: 'Nilema App',
    description: 'A versatile application providing useful functionalities.',
    imageSrc:
      'https://cdn.pixabay.com/photo/2022/05/28/22/44/multi-storey-parking-garage-7228120_1280.jpg',
    link: 'https://github.com/mrDani/NilemaApp',
    tech: ['React', 'TypeScript', 'StyledComponents'],
  },
  {
    id: 3,
    title: 'Bookstore App',
    description:
      'An interactive Bookstore application built with Ruby on Rails and Open Library API.',
    imageSrc:
      'https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg',
    link: 'https://github.com/mrDani/BookLibraryAPI',
    tech: ['Ruby on Rails', 'API Integration', 'Bootstrap'],
  },
  {
    id: 4,
    title: 'GigsHub',
    description: 'A PHP-based application for managing events and gigs.',
    imageSrc:
      'https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg',
    link: 'https://github.com/mrDani/Gigshub',
    tech: ['PHP', 'MySQL', 'Laravel'],
  },
];

const Work = () => {
  return (
    <SectionContainer id="projects">
      <SectionTitle>Projects</SectionTitle>
      <ProjectsContainer>
        {projects.map((project, index) => (
          <Card
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            description={project.description}
            buttonLabel="View Project"
            onButtonClick={() => window.open(project.link, '_blank')}
          />
        ))}
      </ProjectsContainer>
    </SectionContainer>
  );
};

export default Work;

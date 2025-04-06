
# Daniel Babalola Portfolio Site

This is a React portfolio website showcasing my coursework and projects, built using my existing UI component library.

## 📚 Sections
- Basic Information
- Work
- Skills
- Resources
- Developer Setup

## Getting Started
1. Install dependencies:
# UI Garden Component Library

It is also a React Component Library built with Storybook. It includes the following components:

- Button
- Label
- Text
- Table
- Dropdown
- Radio Button
- Img
- Hero Image
- Card

Each component is:

- Responsive
- Styled using StyledComponents
- Equipped with Default and Disabled states
- Fully interactive with Storybook Controls

## Features

- Interactive Storybook UI for live preview and control of each component's props
- Built with React, TypeScript, and StyledComponents
- Responsive Design for all components
- Dockerized for easy deployment on localhost:8083

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Docker](https://docs.docker.com/get-docker/)

### 1. Installation

Clone the repository and navigate into the project directory:

````bash
git clone <repository-url>
cd ui-garden

npm install

# Ensure TypeScript & ESLint checks pass
npm run lint

# Run Jest test.......
npm run test

npm run storybook

# To Run this Application for Docker: 

npm start 

# To run storybook 
npm run build-storybook

docker build -t babalola_daniel_coding_assignment14 .

docker run -d -p 5575:80 --name babalola_daniel_coding_assignment14 babalola_daniel_coding_assignment14


# Open your browser at: 

http://localhost:5575


docker stop babalola_daniel_coding_assignment14

docker rm babalola_daniel_coding_assignment14

docker rmi babalola_daniel_coding_assignment14


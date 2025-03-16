# UI Garden Component Library

A React + TypeScript UI Component Library with Storybook, including automated code quality checks (ESLint, Prettier, Tests) using Husky and GitHub Actions.

This is a React Component Library built with Storybook. It includes the following components:

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

## 📚 Features

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

# Run Jest tests
npm run test

npm run storybook

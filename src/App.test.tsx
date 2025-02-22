import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders UI Garden Component Library heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/UI Garden Component Library/i);
  expect(headingElement).toBeInTheDocument();
});

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders the navbar', () => {
  render(<App />);

  const navbarElements = screen.getAllByText(/Daniel/i);
  
  expect(navbarElements[0]).toBeInTheDocument();
});

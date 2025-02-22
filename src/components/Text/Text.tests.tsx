import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Text from './Text';

describe('Text Component', () => {
  test('should be visible', () => {
    render(<Text content="Visible Text" />);
    expect(screen.getByText('Visible Text')).toBeVisible();
  });

  test('should change color when disabled', () => {
    render(<Text content="Disabled Text" disabled />);
    expect(screen.getByText('Disabled Text')).toHaveStyle('color: #ccc');
  });

  test('should apply correct font size', () => {
    render(<Text content="Large Text" size="large" />);
    expect(screen.getByText('Large Text')).toHaveStyle('font-size: 24px');
  });
});

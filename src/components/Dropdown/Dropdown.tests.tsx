import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Dropdown from './Dropdown';

describe('Dropdown Component', () => {
  test('should be visible', () => {
    render(<Dropdown options={['Option 1']} onChange={() => {}} />);
    expect(screen.getByText('Option 1')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(<Dropdown options={['Option 1']} onChange={() => {}} disabled />);
    expect(screen.getByRole('combobox')).toHaveStyle('opacity: 0.6');
  });
});

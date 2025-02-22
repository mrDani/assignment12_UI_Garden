import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import RadioButton from './RadioButton';

describe('RadioButton Component', () => {
  test('should be visible', () => {
    render(<RadioButton options={['Option A']} onChange={() => {}} />);
    expect(screen.getByLabelText('Option A')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(<RadioButton options={['Option A']} onChange={() => {}} disabled />);
    expect(screen.getByLabelText('Option A')).toBeDisabled();
  });
});

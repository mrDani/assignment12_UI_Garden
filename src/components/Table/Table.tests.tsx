import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Table from './Table';

describe('Table Component', () => {
  test('should be visible', () => {
    render(<Table headers={['Name']} rows={[['Alice']]} />);
    expect(screen.getByText('Alice')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(<Table headers={['Name']} rows={[['Alice']]} disabled />);
    expect(screen.getByText('Alice').closest('table')).toHaveStyle(
      'opacity: 0.6'
    );
  });
});

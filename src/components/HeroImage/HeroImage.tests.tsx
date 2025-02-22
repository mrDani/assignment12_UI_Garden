import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('should be visible', () => {
    render(<HeroImage backgroundImage="https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg" title="Visible Hero" />);
    expect(screen.getByText('Visible Hero')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(<HeroImage backgroundImage="https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg" title="Disabled Hero" disabled />);
    expect(screen.getByText('Disabled Hero').parentElement).toHaveStyle('opacity: 0.6');
  });
});

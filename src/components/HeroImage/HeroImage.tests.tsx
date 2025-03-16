import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import HeroImage from './HeroImage';

describe('HeroImage Component', () => {
  test('renders correctly with provided props', () => {
    render(
      <HeroImage
        imageSrc="https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg"
        title="Visible Hero"
        description="This is a hero image."
      />
    );

    expect(screen.getByText('Visible Hero')).toBeVisible();
    expect(screen.getByText('This is a hero image.')).toBeVisible();
  });

  test('applies correct opacity when disabled', () => {
    render(
      <HeroImage
        imageSrc="https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg"
        title="Disabled Hero"
        description="This hero is disabled."
        disabled
      />
    );

    expect(screen.getByText('Disabled Hero').parentElement).toHaveStyle(
      'opacity: 0.5'
    );
  });

  test('defaults opacity to 1 when not disabled', () => {
    render(
      <HeroImage
        imageSrc="https://cdn.pixabay.com/photo/2016/08/09/12/20/sunset-1580493_1280.jpg"
        title="Default Hero"
        description="Default hero description."
      />
    );

    expect(screen.getByText('Default Hero').parentElement).toHaveStyle(
      'opacity: 1'
    );
  });
});

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  test('should be visible', () => {
    render(
      <Card
        imageSrc="https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg"
        title="Visible Card"
        description="This is a visible card."
        buttonLabel="Learn More"
        onButtonClick={() => {}}
      />
    );
    expect(screen.getByText('Visible Card')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(
      <Card
        imageSrc="https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg"
        title="Disabled Card"
        description="This card is disabled."
        buttonLabel="Learn More"
        onButtonClick={() => {}}
        disabled
      />
    );
    expect(screen.getByText('Disabled Card').closest('div')).toHaveStyle(
      'opacity: 0.6'
    );
  });

  test('should trigger button click', () => {
    const onClick = jest.fn();
    render(
      <Card
        imageSrc="https://cdn.pixabay.com/photo/2024/12/31/10/52/salamanca-9302112_1280.jpg"
        title="Clickable Card"
        description="This card is clickable."
        buttonLabel="Click Me"
        onButtonClick={onClick}
      />
    );
    fireEvent.click(screen.getByText('Click Me'));
    expect(onClick).toHaveBeenCalled();
  });
});

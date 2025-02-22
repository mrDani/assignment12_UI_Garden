import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Button from './Button';

describe('Button Component', () => {
  test('should be visible', () => {
    render(<Button text="Click Me" onClick={() => {}} />);
    expect(screen.getByText('Click Me')).toBeVisible();
  });

  test('should change background color when disabled', () => {
    render(<Button text="Disabled" onClick={() => {}} disabled />);
    expect(screen.getByText('Disabled')).toHaveStyle('background-color: #ccc');
  });
});

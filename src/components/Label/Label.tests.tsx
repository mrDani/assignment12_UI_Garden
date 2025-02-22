import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from './Label';

describe('Label Component', () => {
  test('should be visible', () => {
    render(<Label text="Visible Label" />);
    expect(screen.getByText('Visible Label')).toBeVisible();
  });

  test('should change color when disabled', () => {
    render(<Label text="Disabled Label" disabled />);
    expect(screen.getByText('Disabled Label')).toHaveStyle('color: #ccc');
  });

  test('should apply custom color', () => {
    render(<Label text="Custom Color" color="#ff69b4" />);
    expect(screen.getByText('Custom Color')).toHaveStyle('color: #ff69b4');
  });
});

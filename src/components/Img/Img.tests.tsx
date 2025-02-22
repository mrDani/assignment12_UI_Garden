import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Img from './Img';

describe('Img Component', () => {
  test('should be visible', () => {
    render(<Img src="https://cdn.pixabay.com/photo/2022/05/28/22/44/multi-storey-parking-garage-7228120_1280.jpg" alt="Visible Image" />);
    expect(screen.getByAltText('Visible Image')).toBeVisible();
  });

  test('should change opacity when disabled', () => {
    render(<Img src="https://cdn.pixabay.com/photo/2022/05/28/22/44/multi-storey-parking-garage-7228120_1280.jpg" alt="Disabled Image" disabled />);
    expect(screen.getByAltText('Disabled Image')).toHaveStyle('opacity: 0.6');
  });
});

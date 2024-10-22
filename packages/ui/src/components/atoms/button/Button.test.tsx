import { render, screen } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';
import { Button } from './Button';


describe('Button Component', () => {
  test('renders with the correct label', () => {
    render(<Button label="Click Me"  backgroundColor="#1ecbe1" />);
    
    const buttonElement = screen.getByRole('button', { name: /click me/i });
    expect(buttonElement).toBeInTheDocument();
  });

});

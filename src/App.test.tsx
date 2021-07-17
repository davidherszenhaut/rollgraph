import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders rollgraph header', () => {
  render(<App />);
  const linkElement = screen.getByText(/rollgraph/i);
  expect(linkElement).toBeInTheDocument();
});

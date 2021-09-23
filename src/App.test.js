import { render, screen } from '@testing-library/react';
import App from './App';

test('renders simple calculator', () => {
  render(<App />);
  const linkElement = screen.getByTestId(/calculator/i);
  expect(linkElement).toBeInTheDocument();
});

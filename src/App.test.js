import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Darsin app', () => {
  render(<App />);
  expect(screen.getAllByText('DARSIN').length).toBeGreaterThan(0);
});

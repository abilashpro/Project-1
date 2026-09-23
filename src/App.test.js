import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Dorsin app', () => {
  render(<App />);
  expect(screen.getAllByText('DORSIN').length).toBeGreaterThan(0);
});

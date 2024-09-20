import { render, screen } from '@testing-library/react';
import App from './App';

// eslint-disable-next-line
test('renders learn react link', () => {
  // eslint-disable-next-line
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  // eslint-disable-next-line
  expect(linkElement).toBeInTheDocument();
});

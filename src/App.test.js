import { render, screen } from '@testing-library/react';
import App from './App';

test('renders weather information', () => {
  render(<App />);
  const cityElement = screen.getByText(/belgrade/i);
  const temperatureElement = screen.getByText(/sunny/i);
  expect(cityElement).toBeInTheDocument();
  expect(temperatureElement).toBeInTheDocument();
});

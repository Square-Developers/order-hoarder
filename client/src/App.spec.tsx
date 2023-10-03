import { expect, test } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders the landing page', async () => {
  render(<App />);
  const pageTitle = screen.getByText('Hello, Square.');
  const pageSubtitle = screen.getByText('Welcome to your new web app.');

  expect(pageTitle).toBeInTheDocument();
  expect(pageSubtitle).toBeInTheDocument();
});

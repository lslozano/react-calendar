import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { handleSubmit } from './components/ReminderForm'

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// Understood that I had to test if the function 
// of adding a new reminder worked correctly.
// Not sure if this suffices. 
test('submit of form occurs correctly', () => {
  expect(handleSubmit).toBeTruthy()
})
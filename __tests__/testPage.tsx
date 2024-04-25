import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../src/app/page'
import React from 'react';

describe('Home component', () => {
  test('renders welcome message', () => {
    const {getByText} = render(<Page/>);
    const welcomeMessage = getByText('Welcome to your new projects!');
    expect(welcomeMessage).toBeInTheDocument();
  });
});
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Counter from '../components/counter.jsx'

describe('renders all pieces to frontend', () => {

  it('should render the counter button', () => {
    render(<Counter />);
    expect(screen.queryByRole('button', { name: "increment" })).toBeTruthy();
  })

  it('should increment the value on click', () => {
    render(<Counter />);
    expect(screen.queryByText('counter: 0')).toBeTruthy();
    fireEvent.click(screen.getByRole('button'));
    expect(screen.queryByText('counter: 0')).toBeFalsy();
    expect(screen.queryByText('counter: 1')).toBeTruthy();
  })
})
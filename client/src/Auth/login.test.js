import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Login from './Login';

test('renders the login form', () => {
    render(<Login />);
    expect(screen.getByPlaceholderText('ስልክ ቁጥር')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('ይለፍ ቃል')).toBeInTheDocument();
    expect(screen.getByText('ግባ')).toBeInTheDocument();
  });
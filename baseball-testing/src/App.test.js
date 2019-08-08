import React from 'react';
import * as rtl from '@testing-library/react';
import App from './App';

describe('App()', () => {
  it('renders App', () => {
    const wrapper = rtl.render(<App />);
    expect(wrapper.getByText(/lambda/i));
  });
})


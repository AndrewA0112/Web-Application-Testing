import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import Display from './Display';

describe('Display()', () => {
  it('renders Strikes', () => {
    const wrapper = rtl.render(<Display atBat={{strikes: 4,balls: 4, hits: 4}} />);
    const strikesHeader = wrapper.getByTestId('strikesId')
    expect(strikesHeader).toHaveTextContent(`4`)
  });

  it('renders Balls', () => {
    const wrapper = rtl.render(<Display atBat={{strikes: 4,balls: 4, hits: 4}}/>);
    const ballsHeader = wrapper.getByTestId('ballsId')
    expect(ballsHeader).toHaveTextContent(`4`)
  });

  it('renders Hits', () => {
    const wrapper = rtl.render(<Display atBat={{strikes: 4,balls: 4, hits: 4}}/>);
    const hitsHeader = wrapper.getByTestId('hitsId')
    expect(hitsHeader).toHaveTextContent(`4`)
  });
})
import React from 'react';
import * as rtl from '@testing-library/react';
import '@testing-library/react/cleanup-after-each'
import '@testing-library/jest-dom/extend-expect'
import Dashboard from './Dashboard';
import Display from './Display';
import { fireEvent } from '@testing-library/react';

describe('Dashboard()', () => {
    it('Should render w/out crashing', () => {
        rtl.render(<Dashboard />)
    })
    it('Ball btn fires', () => {
        const wrapper = rtl.render(<Dashboard atBat={{strikes: 1,balls: 2,fouls: 0, hits: 0}} setAtBat={() => null}/>);
        const ballBtn = wrapper.getByText('Ball');
        expect(fireEvent.click(ballBtn))
    })
    it('Strike btn fires', () => {
        const wrapper = rtl.render(<Dashboard atBat={{strikes: 1,balls: 2,fouls: 0, hits: 0}} setAtBat={() => null}/>);
        const strikeBtn = wrapper.getByText('Strike');
        expect(fireEvent.click(strikeBtn))
    })
    it('Foul btn fires', () => {
        const wrapper = rtl.render(<Dashboard atBat={{strikes: 1,balls: 2,fouls: 0, hits: 0}} setAtBat={() => null}/>);
        const foulBtn = wrapper.getByText('Foul');
        expect(fireEvent.click(foulBtn))
    })
    it('Hit btn fires', () => {
        const wrapper = rtl.render(<Dashboard atBat={{strikes: 1,balls: 2,fouls: 0, hits: 0}} setAtBat={() => null}/>);
        const hitBtn = wrapper.getByText('Hit');
        expect(fireEvent.click(hitBtn))
    })
})

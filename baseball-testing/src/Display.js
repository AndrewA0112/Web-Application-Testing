import React from 'react';

const Display = (props) => {

    const { atBat, setAtBat } = props;

    return (
        <div>
            <h1 data-testid='strikesId'>Strikes: {atBat.strikes}</h1>
            <h1 data-testid='ballsId'>Balls: {atBat.balls}</h1>
            {/* <h1 data-testid='foulsId'>Fouls: {atBat.fouls}</h1> */}
            <h1 data-testid='hitsId'>Hits: {atBat.hits}</h1>
        </div>
    )
}

export default Display;
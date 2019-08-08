import React from 'react';

const Dashboard = (props) => {

    const { atBat, setAtBat } = props;

    const strikeChange = () => {
        if(atBat.strikes < 2){
            setAtBat({...atBat, strikes: ++atBat.strikes})
        }
        else{
            setAtBat({...atBat, strikes: 0, balls: 0})
        }
    }

    const ballChange = () => {
        if(atBat.balls < 3){
            setAtBat({...atBat, balls: ++atBat.balls})
        }
        else{
            setAtBat({...atBat, strikes: 0, balls: 0})
        }
    }

    const foulChange = () => {
        if(atBat.strikes < 2){
            setAtBat({...atBat, strikes: ++atBat.strikes})
        }
    }

    const hitChange = () => {
        setAtBat({strikes: 0, balls: 0, hits: ++atBat.hits})
    }
    
    const inningChange = () => {
        setAtBat({strikes: 0, balls: 0, hits: 0})
    }

    return(
        <div>
            <button onClick={strikeChange}>Strike</button>
            <button onClick={ballChange}>Ball</button>
            <button onClick={foulChange}>Foul</button>
            <button onClick={hitChange}>Hit</button>
            <button onClick={inningChange}>Inning Over</button>
        </div>
    )
}

export default Dashboard;
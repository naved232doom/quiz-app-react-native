import React from 'react';
import {createContext, useState} from 'react';

const ScoreContext= createContext();

export function ScoreProvider({children}){

    const [score,setScore] = useState(0);

    const incrementScore= (points)=>{
        const newScore= score + points;
        setScore(newScore);
    }
    return (
        <ScoreContext.Provider
        value={{score,incrementScore}}
        >
            {children}
        </ScoreContext.Provider>
    )
}

export default ScoreContext;
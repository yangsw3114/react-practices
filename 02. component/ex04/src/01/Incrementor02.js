import React, {useState} from 'react';

export default function ({ begin, step }) {
    const [stateVal, setVal] = useState(begin); //setVal은 함수

    return (
        <div>
            <button onClick={(e) => {
                setVal(stateVal + step);
            }}>
                <strong>+</strong>
            </button>
            {' '}
            <span>{ stateVal }</span>
            {' '}
            <button onClick={(e) => {
                setVal(stateVal - step);
            }}>
                <strong>-</strong>
            </button>
        </div>
    );
}
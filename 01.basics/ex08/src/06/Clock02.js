import React, { createElement } from 'react';

export default function() {

    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    return (
        // {' : '} 이렇게 작성해야 공백이 인정된다. 
        // : -> 이 방식은 공백을 다 무시해버린다.
        <div>
            {('0' + (hours > 12 ? hours - 12 : hours)).slice(-2)}
            :   
            {('0' + minutes).slice(-2)}
            {' : '}
            {('0' + seconds).slice(-2)}
            {' '}
            {hours > 12 ? 'PM' : 'AM'}
        </div>
    )
} 
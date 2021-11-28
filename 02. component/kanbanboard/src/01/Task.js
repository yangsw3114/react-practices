import React from 'react';

export default function Task({name, done}){
    return(
        <li class='TaskList__Task'>
            <input type='checkbox' checked={done}/>
            {name}
            <a href='#' class='TaskList__Task--remove'></a>
        </li>
    );
}
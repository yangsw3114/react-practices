import React from 'react';
import Task from './Task';

export default function TaskList({name, done}){
    return(
        <div class='TaskList'>
            <ul>
                <Task name ={name} done = {done} />
            </ul>
        </div>
    );
}
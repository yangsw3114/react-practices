import React from 'react';
import TaskList from './TaskList'


export default function Card({cardtitle, desc, tasks}){
    return(
        <div class='Card'>
            <div class='Card__Title'>{cardtitle}</div>
            <div class='Card__Details'>
            {desc}

            {tasks.map((task) => <TaskList
                                    key={task.no}
                                    name={task.name}
                                    done={task.done} />) }
            </div>
        </div>

    );
}
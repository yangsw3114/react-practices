import React, { useState } from 'react';
import TaskList from './TaskList'
import styles from './assets/scss/Card.scss';

export default function Card({cardtitle, desc, tasks, status}){
    const [showDetails, setShowDetails] = useState(false);

    const styleSideColor = {
        position: 'absolute',
        zIndex: -1,
        top:0,
        left:0,
        width: 3,
        height: '100%',
        backgroundColor: status === 'Doing' ? '#bb8D31' : (status === 'ToDo' ? '#3a7e28' : '#222')
    };

    return(
        <div className={styles.Card}>
            <div style={styleSideColor} />
            <div 
                className={
                    showDetails ?
                    [styles.Card__Title, styles.Card__Title__open].join(' ')
                    : styles.Card__Title
                }
                onClick={() => setShowDetails(!showDetails)}>
                    {cardtitle}</div>
            {
                showDetails ?
                <div className={styles.Card__Details}>
                    {desc}
                    {tasks.map((task) => <TaskList
                                            key={task.no}
                                            name={task.name}
                                            done={task.done} />) }              
                </div> : 
                null
            }

        </div>

    );
}
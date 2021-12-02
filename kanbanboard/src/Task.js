import React from 'react';
import styles from './assets/css/Task.css';


export default function Task({name, done}){
    return(
        <li className={styles.Task}>
            <input type='checkbox' checked={done}/>
            {name}
            <a href='#' className={styles['Task--remove']}></a>
        </li>
    );
}
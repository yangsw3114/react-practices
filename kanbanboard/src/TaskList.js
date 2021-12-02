import React from 'react';
import Task from './Task';
import styles from './assets/css/TaskList.css';


export default function TaskList({name, done}){
    return(
        <div className={styles.TaskList}>
            <ul>
                <Task name ={name} done = {done} />
            </ul>
            <input 
                type='text'
                className={styles['TaskList--add-task']}
                placeholder='태스크 추가' />
        </div>
    );
}
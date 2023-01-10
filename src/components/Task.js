import React from 'react'
import '../css/Task.css';
import { BsXCircle } from "react-icons/bs";

function Task({ id, text, completed, funcCompleteTask, funcDeleteTask }){
    return (
        <div className={'task-container' + (completed ? ' completed' : '')}>
            <div className='task-text' onClick={()=>{funcCompleteTask(id)}}>
                {text}
            </div>
            <div className='task-icon' onClick={()=>{funcDeleteTask(id)}}>
                <BsXCircle className='task-delete-icon' />
            </div>
        </div>
    );
}

export default Task
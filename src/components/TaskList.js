import React, { useState } from 'react'
import Task from './Task';
import TaskForm from './TaskForm';
import '../css/TaskList.css';

function TaskList() {

    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        
        if(task.text.trim()){
            task.text = task.text.trim();
            setTasks([task, ...tasks]);
            console.log(tasks);
        }
    }

    const deleteTask = (id) => {
        console.info('delete '+id);
    }

    const completeTask = (id) => {
        console.info('complete' + id);
    }

    return (
        <>
            <TaskForm onSubmit={addTask} />
            <div className='App-tasks'>
                <div className="App-tasks-list">
                    <h2>Mis Tareas</h2>
                    <div className="App-task-list-conatiner">
                        {
                            tasks.map((task) =>
                                <Task
                                key={task.id}
                                id={task.id}
                                text={task.text}
                                completed={task.completed}
                                funcDeleteTask={deleteTask}
                                funcCompleteTask={completeTask}
                                 />
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default TaskList;
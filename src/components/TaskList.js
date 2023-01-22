import React, { useState, useEffect } from 'react'
import Task from './Task';
import TaskForm from './TaskForm';
import '../css/TaskList.css';

function TaskList() {

    const [tasks, setTasks] = useState([]);


    useEffect(() => {
        try
        {
            const updatedTasks = JSON.parse(localStorage.getItem('tasks'));
            if(updatedTasks)
            {
                setTasks(updatedTasks);
            }
        }
        catch(e){
        }
    },[]);

    const addTask = (task) => {
        
        if(task.text.trim()){
            task.text = task.text.trim();
            const updatedTasks = [task, ...tasks];
            setTasks(updatedTasks);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
        }
    }

    const deleteTask = (id) => {
        
        const updatedTasks = tasks.filter((task) => {
            return task.id !== id;
        });

        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    }

    const completeTask = (id) => {
        console.info('complete' + id);

        const updatedTasks = tasks.map((task) => {
            if(task.id === id){
                task.completed = !task.completed;
            }

            return task;
        })

        setTasks(updatedTasks);
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
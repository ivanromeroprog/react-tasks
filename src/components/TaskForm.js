import React, {useState} from 'react'
import '../css/TaskForm.css';
import { v4 as uuidv4 } from 'uuid';

function TaskForm(props){

    const [input, setInput] = useState('');

    const inputChange = e => {
        setInput(e.target.value);
        console.log(input);
    }

    const formSubmit = e => {
        e.preventDefault();
       
        const newTask = {
            text: input,
            id: uuidv4(),
            completed: false
        }

        props.onSubmit(newTask);
    }

    return (
        <form className='form-task' onSubmit={formSubmit}>
            <input type="text" className='form-task-input'
            placeholder='Escribe una tarea'
            name='task-text' onChange={inputChange} />
            <button className='form-task-button'>
                Agregar Tarea
            </button>
        </form>
    );
}

export default TaskForm
import './Task.scss'
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useState } from 'react';

const Task = () =>{
    
    const [title, setTitle] = useState("");

    const sendInFireBase = async (e) =>{
        setTitle(e.target.value)
        await addDoc(collection(db, 'todos'),{
            key: title,
            title,
            completed: false
        });
        setTitle('')
    }

    const addTaskHandler = async (e) =>{
        sendInFireBase(e)
        e.target.value = ''
        console.log(`Задача с текстом (${title}) успешно добавлена!`)
        
    } // добавление новых данных

    const onChangeHandler = (e) =>{
        if(e.target.value.lenght === 0)
            return;

        setTitle(e.target.value)
    }

    return (
        <div className='Task'>
            <div className='Task-Container'>
                <input className='Task-Input' type="text" placeholder="write a task..." value={title} onChange={onChangeHandler}/>
                <button className='Task-Button' onClick={addTaskHandler}>Add</button>
            </div>
        </div>
    );
}

export default Task;
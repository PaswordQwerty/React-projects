import './Task.scss'
import { db } from '../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { useState } from 'react';

const Task = () =>{
    
    const [title, setTitle] = useState("");

    const sendInFireBase = async (e) =>{
        setTitle(e.target.value)

        const date = new Date();

        await addDoc(collection(db, "todos"), {
            date: date.toLocaleString(),
            key: Math.random().toString(),
            title: title,
            completed: false
        }).then(successful => {
            console.log(`Задача с текстом (${title}) успешно добавлена!`)
        }).catch(error => {
            console.log(error);
        })
        setTitle('')
    }

    const handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            addTaskHandler(e)
        }
    }

    const addTaskHandler = async (e) =>{
        if(title.length === 0)
            return;
        sendInFireBase(e)
        e.target.value = ''
        
    } // добавление новых данных

    return (
        <div className='Task'>
            <div className='Task-Container'>
                <input className='Task-Input' 
                    onKeyDown={handleKeyPress} 
                    type="text" 
                    placeholder="write a task..." 
                    value={title} 
                    onChange={(e) => e.target.value.lenght === 0 ? '' : setTitle(e.target.value)}
                />
                <button className='Task-Button' onClick={addTaskHandler}>Add</button>
            </div>
        </div>
    );
}

export default Task;
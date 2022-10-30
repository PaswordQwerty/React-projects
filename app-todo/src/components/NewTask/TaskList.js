import './TaskList.scss'
import { useEffect, useState } from 'react';
import TaskItem from './TaskItem';

import { collection, query,onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';

const TaskList = () =>{
    const [todos, setTodos] = useState([])

    useEffect(()=>{
        getTodos()
    }, [])

    const getTodos = async () =>{
        const data = await query(collection(db, 'todos'));
        onSnapshot(data, (querySnaphot)=>{
            const array = [];
            querySnaphot.forEach((doc)=>{
                array.unshift({...doc.data(), id:doc.id});
            })
            let s = array.sort((a, b)=>  b.date - a.date )
            s.forEach(item => console.log(item.date.toLocaleString()))
            setTodos(array)
        });
    }

    const ResultFail = () =>{
        return (
            <p className="TaskList-fallback">Задач пока нет, попробуй добавить новую задачу!</p>
    )};

    const ResultSuccessful = () =>{
        return (
            todos.map(todo =>
            <TaskItem 
                date={todo.date}
                id={todo.id}
                key={todo.key} 
                title={todo.title} 
                completed={todo.completed}
            />)
    )}

    return (
        <div className='TaskList'>
            {todos.length === 0 ? <ResultFail /> : <ResultSuccessful />}
        </div>
    );
}

export default TaskList;
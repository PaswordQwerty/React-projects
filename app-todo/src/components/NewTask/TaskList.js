import './TaskList.scss'
// useContext, 
import { useEffect, useState } from 'react';
// import { Context } from '../../context';
import TaskItem from './TaskItem';
import { 
    collection, 
    query,
    onSnapshot
} from 'firebase/firestore';
import { db } from '../../firebase';

const TaskList = () =>{
    // const {task} = useContext(Context);

    const [todos, setTodos] = useState([])
    
    // const taskList = task.map(
    //     (item)=>
    //         <TaskItem 
    //         key={item.id}
    //         text={item.text} 
    //     />)

    useEffect(()=>{
        const q = query(collection(db, 'todos'));
        const unsub = onSnapshot(q, (querySnaphot)=>{
            const array = [];
            querySnaphot.forEach((doc)=>{
                array.push({...doc.data(), id:doc.id});
            })
            setTodos(array)
        });
        return () => unsub;
    },[]);

    // const ResultFail = () =>{
    //     return (
    //         <p className="TaskList-fallback">Задач пока нет, попробуй добавить новую задачу!</p>
    // )};

    return (
        <div className='TaskList'>
            {todos.map((todo) =>
                <TaskItem 
                    key={todo.title} 
                    text={todo.title} 
                />
            )}
            
        </div>
    );
}

export default TaskList;
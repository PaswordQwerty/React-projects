import './TaskList.scss'
import { useContext } from 'react';
import { Context } from '../../context';
import TaskItem from './TaskItem'

const TaskList = () =>{
    const {task} = useContext(Context);

    const taskList = task.map((item)=>
        <TaskItem 
            key={item.id}
            text={item.text} 
    />)

    const ResultFail = () =>{
        return (
            <p className="TaskList-fallback">Задач пока нет, попробуй добавить новую задачу!</p>
    )};

    return (
        <div className='TaskList'>
            {taskList.length === 0 ? <ResultFail /> : taskList}
        </div>
    );
}

export default TaskList;
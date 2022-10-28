import TaskItem from "./TaskItem";
import './TaskList.scss'

const TaskList = () =>{
    return (
        <div className='TaskList'>
            <TaskItem />
            <TaskItem />
            <TaskItem />
        </div>
    );
}

export default TaskList;
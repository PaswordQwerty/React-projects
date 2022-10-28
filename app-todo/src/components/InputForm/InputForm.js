import Task from "../NewTask/Task";
import TaskList from "../NewTask/TaskList";
import './InputForm.scss'

const InputForm = () =>{
    return(
        <div className="InputForm">
            <Task />
            <hr className='InputForm-hr'/>
            <TaskList />
        </div>
    );
}

export default InputForm;
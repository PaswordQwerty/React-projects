import Task from "../NewTask/Task";
import TaskList from "../NewTask/TaskList";

const InputForm = () =>{
    return(
        <div className="InputForm">
            <Task />
            <hr />
            <TaskList />
        </div>
    );
}

export default InputForm;
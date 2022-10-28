import './Task.scss'

const Task = () =>{
    return (
        <div className='Task'>
            <div className='Task-Container'>
                <input className='Task-Input' type="text" placeholder="write a task..." />
                <button className='Task-Button'>Add</button>
            </div>
        </div>
    );
}

export default Task;
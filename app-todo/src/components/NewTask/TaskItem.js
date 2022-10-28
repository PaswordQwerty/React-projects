import './TaskItem.scss'

const TaskItem = (props) =>{
    return (
        <div className='Task-Item'>
            <h3 className='Task-Item-h3'>{props.text}</h3>
            <button className='Task-Item-button'>X</button>
        </div>
    );
}

export default TaskItem;
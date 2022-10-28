import './TaskItem.scss'

const TaskItem = () =>{
    return (
        <div className='Task-Item'>
            <h3 className='Task-Item-h3'>Сходить вечером в магазин за сыром</h3>
            <button className='Task-Item-button'>X</button>
        </div>
    );
}

export default TaskItem;
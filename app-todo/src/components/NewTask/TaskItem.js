import './TaskItem.scss'
import { db } from '../../firebase';
import { doc, deleteDoc, updateDoc } from "firebase/firestore";

const TaskItem = (props) =>{

    const deleteTaskHandler = async () =>{
        await deleteDoc(doc(db, "todos", props.id));
    }

    const completedHandler = async () =>{
        await updateDoc(doc(db, "todos", props.id),{completed: !props.completed})
    }

    return (
        <div className='Task-Item'>
            <h3 className='Task-Item-h3' style={{textDecoration: `${props.completed ? 'line-through' : 'none'}`}} onClick={completedHandler}>{props.title}</h3>
            <button onClick={deleteTaskHandler} className='Task-Item-button'>X</button>
        </div>
    );
}

export default TaskItem;
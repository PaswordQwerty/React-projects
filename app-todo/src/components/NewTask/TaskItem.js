import './TaskItem.scss'
import { db } from '../../firebase';
import { doc, deleteDoc } from "firebase/firestore";

const TaskItem = (props) =>{

    const deleteTaskHandler = async () =>{
        await deleteDoc(doc(db, "todos", props.id));
    }

    return (
        <div className='Task-Item'>
            <h3 className='Task-Item-h3'>{props.title}</h3>
            <button onClick={deleteTaskHandler} className='Task-Item-button'>X</button>
        </div>
    );
}

export default TaskItem;
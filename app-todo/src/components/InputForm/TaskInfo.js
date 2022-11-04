import BtnTheme from '../UI/BtnTheme'
import '../fonts/font.css'
import './TaskInfo.scss'

const TaskInfo = () => {
    return (
        <div className="TaskInfo">
            <div className="change-theme">
                <BtnTheme />
            </div>
            <div>
                <h1 className='todo-text'>Todo List22</h1>
            </div>
        </div>
    );
}

export default TaskInfo;
import BtnTheme from './UI/BtnTheme'

const TaskInfo = () => {
    return (
        <div className="TaskInfo">
            <div className="change-theme">
                <BtnTheme />
            </div>
            <div>
                <h1>Todo list</h1>
            </div>
        </div>
    );
}

export default TaskInfo;
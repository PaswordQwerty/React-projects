import { useState } from "react";
import App from "./App";
import { Context } from "./context";

const Data = () =>{
    const [task, setTask] = useState([
        {
            id:'1',
            text:'Купить молока',
            completed: false
        },
        {
            id:'2',
            text:'Сходить за хлебом',
            completed: false
        },
        {
            id:'3',
            text:'Сделать домашнее задание',
            completed: false
        }
    ]);

    return(
        <Context.Provider value={{task, setTask}}>
            <App />
        </Context.Provider>
    );
}

export default Data;
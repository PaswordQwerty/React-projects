import { useState } from "react";
import App from "./App";
import { Context } from "./context";

const Data = () =>{
    const [task, setTask] = useState([
        {
            id:'1',
            text:'Пурыльня'
        },
        {
            id:'2',
            text:'Писец'
        },
        {
            id:'3',
            text:'Что-то'
        }
    ]);

    return(
        <Context.Provider value={{task, setTask}}>
            <App />
        </Context.Provider>
    );
}

export default Data;
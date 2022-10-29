import App from "./App";
import { Context } from "./context";

const Data = () =>{
    return(
        <Context.Provider value="2">
            <App />
        </Context.Provider>
    );
}

export default Data;
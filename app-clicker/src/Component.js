import { useState } from "react";
import App from "./App";
import { Context } from "./context";


const Component = () =>{
    const [bamboo, setBamboo] = useState(0);
    const [modBaboo, setModBaboo] = useState(0);

    return(
        <Context.Provider value={ {bamboo, setBamboo, modBaboo, setModBaboo} }>
            <App />
        </Context.Provider>
    );
}

export default Component;
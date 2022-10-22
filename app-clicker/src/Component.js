import { useState } from "react";
import App from "./App";
import { Context } from "./context";


const Component = () =>{
    const [bamboo, setBamboo] = useState(0);
    const [modBaboo, setModBaboo] = useState(0);

    const modsData = [
        {
            img: process.env.PUBLIC_URL + 'img/shop/bamboo.png',
            name: 'Палка бамбука', price: 10, value: 1
        },
        {
            img: process.env.PUBLIC_URL + 'img/shop/flowers.png',
            name: 'Цветы', price: 15, value: 3
        },
        {
            img: process.env.PUBLIC_URL + 'img/shop/fruits.png',
            name: 'Фрукты', price: 25, value: 5
        }
    ];

    return(
        <Context.Provider value={ {bamboo, setBamboo, modBaboo, setModBaboo, modsData} }>
            <App />
        </Context.Provider>
    );
}

export default Component;
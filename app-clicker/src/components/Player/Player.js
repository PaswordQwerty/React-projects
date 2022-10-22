import { useContext, useRef } from 'react';
import './Player.scss'
import { Context } from '../../context.js';

const Player = () =>{

    const imagePlayer = process.env.PUBLIC_URL + '/img/Player/img_laugh.png';

    const { bamboo, setBamboo, modBaboo } = useContext(Context);
    const clickVisible = useRef(false);

    const clickHandler = () =>{
        clickVisible.current = !clickVisible.current;
        // // console.log(clickVisible); // для анимаций

        if(modBaboo === 0)
        {
            setBamboo(bamboo => bamboo + 1);
            console.log(`Нанесли дамаг: 1`);
        }
        else
        {
            const TotalAmount = bamboo + modBaboo;
            setBamboo(TotalAmount);
            console.log(`Нанесли дамаг: ${modBaboo}`);
        }
        
    };

    return (
        <div className="Player">
            <img className="Player__img" src={imagePlayer} onClick={clickHandler} alt="" />
        </div>
    );
}

export default Player;
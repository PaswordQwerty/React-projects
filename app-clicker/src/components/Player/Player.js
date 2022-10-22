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

        // сделать оптимизацию value провайдера
        
        const TotalAmount = bamboo + modBaboo;
        setBamboo(TotalAmount);
        console.log(`Нанесли дамаг: ${modBaboo}`);  
    };

    return (
        <div className="Player">
            <img className="Player__img" src={imagePlayer} onClick={clickHandler} alt="" />
        </div>
    );
}

export default Player;
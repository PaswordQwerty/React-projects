import { useContext } from 'react';
import './Player.scss'
import { Context } from '../../context.js';

const Player = () =>{

    const imagePlayer = process.env.PUBLIC_URL + '/img/Player/img_laugh.png';

    const { bamboo, setBamboo, modBaboo } = useContext(Context);

    const clickHandler = () =>{
        // сделать оптимизацию value провайдера
        
        const TotalAmount = bamboo + modBaboo;
        setBamboo(TotalAmount);
        saveBamboo(TotalAmount);
        console.log(`Нанесли дамаг: ${modBaboo}`);  
    };

    const saveBamboo = (TotalAmount) =>{
        localStorage.setItem('count', JSON.stringify(TotalAmount));
    }

    return (
        <div className="Player">
            <img className="Player__img" src={imagePlayer} onClick={clickHandler} alt="" />
        </div>
    );
}

export default Player;
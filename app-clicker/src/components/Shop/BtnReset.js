import './BtnItem.scss'
import { useContext, useEffect } from 'react';
import { Context } from '../../context.js';

const BtnReset = (props) =>{

    const { bamboo, modBaboo, linkImg, setBamboo, setModBaboo } = useContext(Context);

    const clickHandler = () =>{
        if(bamboo >= props.price)
        {
            setBamboo(count => count = 1000);
            setModBaboo(count => count = 1); 
        }
    }

    useEffect(() => {
        console.log(`клик сейчас равен: ${modBaboo}`);
        localStorage.setItem('setBamboo', JSON.stringify(modBaboo));
        localStorage.setItem('count', JSON.stringify(bamboo));
    }, [bamboo,modBaboo]);

    return(
        <div className='Shop__main-cont__mod'>
            <div className='Shop__main-cont__mod-info'>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
            </div>
            <button className='Shop__main-cont__mod-btn' onClick={clickHandler}>
                <div className='Shop__main-cont__mod-btn-c1'>
                    <h3>Цена</h3>
                    <div>
                        <img src={linkImg.bambooImg} alt="" />
                        <h2>{props.price}</h2>
                    </div>
                </div>
                <div className='Shop__main-cont__mod-btn-c2'>
                    <h3>Бонус</h3>
                    <h3>?</h3>
                </div>
            </button>
        </div>
    );
}

export default BtnReset;
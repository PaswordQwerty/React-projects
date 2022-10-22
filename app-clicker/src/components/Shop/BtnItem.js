import './BtnItem.scss'
import { useContext, useEffect } from 'react';
import { Context } from '../../context.js';

const BtnItem = (props) =>{

    const { bamboo, setBamboo, modBaboo, setModBaboo } = useContext(Context);
    const bambooValue = props.value;

    const Click = () =>{
        if(bamboo >= props.price)
        {
            setBamboo(count => count - Number(props.price));
            setModBaboo(count => count + Number(bambooValue)); 
        }
    }


    useEffect(() => {
        console.log(`клик сейчас равен: ${modBaboo}`);
    }, [modBaboo]);

    return(
        <div className='Shop__main-cont__mod'>
            <div className='Shop__main-cont__mod-info'>
                <img src={props.img} alt="" />
                <h3>{props.name}</h3>
            </div>
            <button className='Shop__main-cont__mod-btn' onClick={Click}>
                <div className='Shop__main-cont__mod-btn-c1'>
                    <h3>Цена</h3>
                    <div>
                        <img src={process.env.PUBLIC_URL + 'img/shop/bamboo2.png'} alt="" />
                        <h2>{props.price}</h2>
                    </div>
                </div>
                <div className='Shop__main-cont__mod-btn-c2'>
                    <h3>Бонус</h3>
                    <div>
                        <img src={process.env.PUBLIC_URL + 'img/shop/tap.png'} alt="" />
                        <h2>+{props.value}</h2>
                    </div>
                </div>
            </button>
        </div>
    );
}

export default BtnItem;
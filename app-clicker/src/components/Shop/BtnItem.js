import './BtnItem.css'
import { useContext, useEffect } from 'react';
import { Context } from '../../context.js';

const BtnItem = (props) =>{

    const { modBaboo, setModBaboo } = useContext(Context);
    const bambooValue = props.value;

    const Click = () =>{
        if(modBaboo === 0)
            setModBaboo(count => count + Number(bambooValue) + 1); 
        else
            setModBaboo(count => count + Number(bambooValue)); 
    }

    useEffect(() => {
        console.log(`клик сейчас равен: ${modBaboo}`);
    }, [modBaboo]);

    return(
        <div className='Shop__btn-list_btn' onClick={Click}>
            <img src={props.img}  alt=""></img>
            <h2 className='Shop__btn-list_btn-h2'>{props.name}</h2>
            <div className='Shop__btn-list_btn-cont'>
                <h2 className='Shop__btn-list_btn-cont-h2'>{props.price}Б</h2>
                <h2 className='Shop__btn-list_btn-cont-h2-price'>(+{props.value})</h2>
            </div>
        </div>
    );
}

export default BtnItem;
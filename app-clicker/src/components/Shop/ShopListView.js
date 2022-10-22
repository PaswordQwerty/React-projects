import BtnItem from './BtnItem';
import './ShopListView.scss'
import { useContext } from 'react';
import { Context } from '../../context.js';

const ShopListView = () =>{
    const { modsData } = useContext(Context);

    const modsList = modsData.map(item => 
        <BtnItem
            key={item.name}
            img={item.img} name={item.name} 
            price={item.price} 
            value={item.value}
        />);

    

    return (
        <div className='Shop__main-cont' >
            {modsList}
            
            {<BtnItem
                key={"Ресет"}
                name={'Закончить игру'} 
                price={500} 
                value='+'
            />}
        </div>
    );
}

export default ShopListView;
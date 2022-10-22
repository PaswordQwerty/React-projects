import BtnItem from './BtnItem';
import BtnReset from './BtnReset';
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

            {<BtnReset 
                key={"Reset"}
                name={'Закончить игру'} 
                price={50}
                value={0} 
            />}
        </div>
    );
}

export default ShopListView;
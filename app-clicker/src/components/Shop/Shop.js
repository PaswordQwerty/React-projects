import React, { useState } from 'react';
import './Shop.css'
import ShopListView from './ShopListView';

const Shop = () =>{

    const [shop, setShop] = useState(false);

    const clickHandler = (event) =>{
        setShop(!shop);
    };

    return(
        <div className="Shop">
            <button className="Shop__btn" value={shop} onClick={clickHandler}>Магазин улучшений</button>
            {shop && <ShopListView className="Shop__btn"/> } 
        </div>
    );
}

export default Shop;
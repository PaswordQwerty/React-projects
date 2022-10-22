import React, { useState } from 'react';
import './Shop.scss'
import ShopListView from './ShopListView';

const Shop = () =>{
    const [shop, setShop] = useState(false);

    const clickHandler = (event) =>{
        setShop(!shop);
    };

    return(
        <div className="Shop">
            <button className="Shop__btn" value={shop} onClick={clickHandler}>
                <div>Магазин улучшений</div>
                <img src={process.env.PUBLIC_URL + 'img/shop/shops.png'} alt="" />
            </button>
            {shop && <ShopListView />} 
        </div>
    );
}

export default Shop;
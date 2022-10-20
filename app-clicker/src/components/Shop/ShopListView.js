import BtnItem from './BtnItem';
import './ShopListView.css'

const ShopListView = (props) =>{

    return (
        <div className='Shop__btn-list'>
            <BtnItem 
                img={process.env.PUBLIC_URL + 'img/shop/bamboo.png'} 
                name={'Палка бамбука'} 
                value={`+${1}`}
                />
            <BtnItem 
                img={process.env.PUBLIC_URL + 'img/shop/flowers.png'} 
                name={'Цветы'} 
                value={`+${3}`}
                />
            <BtnItem 
                img={process.env.PUBLIC_URL + 'img/shop/fruits.png'} 
                name={'Фрукты'} 
                value={`+${7}`}
                />
        </div>
    );
}

export default ShopListView;
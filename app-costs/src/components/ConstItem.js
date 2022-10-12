import './ConstItem.css';

function ConstItem(props) {
    return (
    <div className='cost-item'>
        <div>{props.date.toISOString()}</div>
        <div className='cost-item__description'>
            <h2>{props.discription}</h2>
            <div className='cost-item__price'>${props.amount}</div>
        </div>
    </div>);
}

export default ConstItem;
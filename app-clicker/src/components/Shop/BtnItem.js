import './BtnItem.css'

const BtnItem = (props) =>{

    return(
        <div className='Shop__btn-list_btn'>
            <img src={props.img}  alt=""></img>
            <h2 className='Shop__btn-list_btn-h2'>{props.name}</h2>
            <div className='Shop__btn-list_btn-cont'>
                <h2 className='Shop__btn-list_btn-cont-h2'>{props.value}</h2>
            </div>
        </div>
    );
}

export default BtnItem;
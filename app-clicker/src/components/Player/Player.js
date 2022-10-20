import './Player.css'

const Player = () =>{

    const imagePlayer = process.env.PUBLIC_URL + '/img/Player/img_laugh.png';

    const clickHandler = () =>{
        console.log("Кликнули");
    };

    return (
        <div className="Player">
            <img className="Player__img" src={imagePlayer} onClick={clickHandler} alt="" />
        </div>
    );
}

export default Player;
import './Player.css'

const Player = () =>{

    const click = () =>{
        console.log("Кликнули");
    }

    return (
        <div className="Player">
            <button onClick={click}>Кликнуть</button>
        </div>
    );
}

export default Player;
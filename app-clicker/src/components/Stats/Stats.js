import "./Stats.css"

const Stats = () =>{

    const imageLogo = process.env.PUBLIC_URL + '/img/other/logo.png';

    return(
    <div className="Stats">
        <div className="Stats-logo">
            <img className="Stats-logo__img" src={imageLogo} alt=""/>
        </div>
        <div className="Stats-info">
            <div className="Stats-info__text">Съедено</div>
            <div className="Stats-info__count">0</div>
        </div>
    </div>
)}

export default Stats;
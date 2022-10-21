import "./Stats.css"
import { useContext } from 'react';
import { Context } from '../../context';

const Stats = () =>{

    const imageLogo = process.env.PUBLIC_URL + '/img/other/logo.png';
    const { bamboo } = useContext(Context);

    return(
    <div className="Stats">
        <div className="Stats-logo">
            <img className="Stats-logo__img" src={imageLogo} alt=""/>
        </div>
        <div className="Stats-info">
            <div className="Stats-info__text">Бамбука</div>
            <div className="Stats-info__count">{bamboo}</div>
        </div>
    </div>
)}

export default Stats;
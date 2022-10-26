import './BtnTheme.scss'

const BtnTheme = () => {
    const imageNight = process.env.PUBLIC_URL + '/img/night.png';
    return (
        <button className="change-theme-btn"> 
            <img className='theme-btn' src={imageNight} alt="" />
        </button>
    );
}

export default BtnTheme;
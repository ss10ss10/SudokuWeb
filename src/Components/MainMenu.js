import '../Styles/MainMenu.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MainMenu = () => {
    const [isShown, setIsShown] = useState('flex');
    const location = useNavigate();

    const handleClick = (e) => {
        setIsShown('None');
        location('/game');
    }
    return (
        <div className="main-menu" style={{display: isShown}}>
            <button className="button" onClick={handleClick}>Easy</button>
            <button className="button" onClick={handleClick}>Medium</button>
            <button className="button" onClick={handleClick}>Hard</button>
        </div>
    );
}

export default MainMenu;
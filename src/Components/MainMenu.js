import '../Styles/MainMenu.css';
import { useState } from 'react';
import { useNavigate } from 'react-router';

const MainMenu = () => {
    const [isShown, setIsShown] = useState('flex');
    const navigate = useNavigate();

    const handleClick = (e) => {
        setIsShown('None');
        navigate('/game', { difficulty: e });
    }
    return (
        <div className="main-menu" style={{display: isShown}}>
            <button className="button" onClick={() => handleClick(1)}>Easy</button>
            <button className="button" onClick={() => handleClick(2)}>Medium</button>
            <button className="button" onClick={() => handleClick(3)}>Hard</button>
        </div>
    );
}

export default MainMenu;
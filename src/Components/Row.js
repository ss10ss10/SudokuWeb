import "../Styles/Board.css";
import {useState, useRef} from 'react';

const Row = ({ updateGameBoard, array, cls, rowNo }) => {
    const [clss,setClss] = useState(["td ", "td ", "tdd ", "td ", "td ", "tdd ", "td ", "td ", "td "]);
    const val = useRef(0)
    const handleChange = (e, i) => {
        updateGameBoard(rowNo, i, Number(e));
    }
        return (
            <div className="tr">
                {array?.map((item, i) => (
                    <div
                        key = {i} 
                        className = { clss[i] + cls } 
                        onChange={(e) => handleChange(e.target.value, i)}
                    >
                            <input className="inp" value={item}></input>
                    </div>))}
            </div>
        );
};
export default Row;
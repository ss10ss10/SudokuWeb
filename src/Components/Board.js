import '../Styles/Board.css';
import Row from './Row';
import { useState } from 'react';
import Game from './Game';

const Board = () => {
    


    // const boardList = Array.from(Array(9), () => new Array(9));
    
    // Tried Normal component but couldn't get it to work
    // const boardList = <Game game={1} />;
    // console.log(boardList);
    
    // Tried hook but couldn't get it to work
    const [boardList, setBoardList] = useState();
    const updateGame = b => {
        setBoardList(b);
    }
    console.log(boardList);
    // boardList[0][1] = 3;
    // boardList[0][4] = 7;
    // boardList[0][5] = 9;
    // boardList[0][6] = 1;
    return (
        <div id="table">
            <Game updateGame={updateGame} game={1} />;
            <Row {...boardList[0]}/>
            <Row {...boardList[1]}/>
            <Row {...boardList[2]}/> 
            <Row {...boardList[3]}/>
            <Row {...boardList[4]}/>
            <Row {...boardList[5]}/>
            <Row {...boardList[6]}/>
            <Row {...boardList[7]}/>
            <Row {...boardList[8]}/>
        </div>
    );
}
export default Board;
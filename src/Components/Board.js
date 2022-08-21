import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";
import { useState } from "react";
import { useLocation } from "react-router";

const Board = () => {
    const location = useLocation()
    const boardList = Game( location.state?.difficulty  === undefined ? 1 : location.state.difficulty );

    let [gameBoard, setGameBoard] = useState(boardList);
    const updateGameBoard = (row, col, value) => {
        let newBoard = [...gameBoard];
        newBoard[row][col] = value;
        setGameBoard(newBoard);
    }
    return (
        <div className="box">
            <div id="table">
            {gameBoard?.map((item, i) => (
                i === 2 || i === 5 ? <Row key={i} updateGameBoard={updateGameBoard} array={gameBoard[i]} cls="trr" rowNo = {i}>
                        {item}
                </Row> : <Row key={i} updateGameBoard={updateGameBoard} array={gameBoard[i]} cls="" rowNo = {i}>
                        {item}
                </Row>
            ))}
            {console.log(gameBoard)}
        </div>
        </div>
    );
};
export default Board;

import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";
import { useState } from "react";

const Board = () => {
    const boardList = Game(3);
    let [gameBoard, setGameBoard] = useState(Game(3));
    const updateGameBoard = (row, col, value) => {
        let newBoard = [...gameBoard];
        newBoard[row][col] = value;
        setGameBoard(newBoard);
    }
        return (
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
        );
};
export default Board;

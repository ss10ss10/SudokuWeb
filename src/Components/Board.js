import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";
import DisplayBoard from "./DisplayBoard";
import { useState } from "react";
import { useLocation } from "react-router";

const Board = () => {
    const location = useLocation();
    const boardList = Game( location.state?.no  === undefined ? 1 : location.state.no );
    let solved = false;
    let count = 0;

    let toSolveBoard = DisplayBoard(boardList, location.state.difficulty);
    
    let [gameBoard, setGameBoard] = useState(toSolveBoard);
    const updateGameBoard = (row, col, value) => {
        let newBoard = [...gameBoard];
        newBoard[row][col] = value;
        if (value === boardList[row][col]) {
            solved = true;
        }else {
            solved = false;
        }
        setGameBoard(newBoard);
        if (solved) {
            count++;
        }else {
            count--;
        }
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
        </div>
        </div>
    );
};
export default Board;

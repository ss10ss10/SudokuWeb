import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";
import DisplayBoard from "./DisplayBoard";
import { useState } from "react";
import { useLocation } from "react-router";

let count = 0;
const Board = () => {
    const location = useLocation();
    const boardList = Game( location.state?.no  === undefined ? 1 : location.state.no );
    let solved = false;
    
    let temp = DisplayBoard(boardList, location.state.difficulty);
    let toSolveBoard = temp[0];
    let emptyList = temp[1];
    
    let [gameBoard, setGameBoard] = useState(toSolveBoard);

    const contains = (arr, item) => {
        var item_as_string = JSON.stringify(item);
      
        var contains = arr.some(function(ele){
          return JSON.stringify(ele) === item_as_string;
        });
        return contains;
    }
    console.log(emptyList);

    const updateGameBoard = (row, col, value) => {
        if (contains(emptyList, [row, col])) {
            let newBoard = [...gameBoard];
            newBoard[row][col] = value;
            if (value === boardList[row][col]) {
                solved = true;
            }else {
                solved = false;
            }


            setGameBoard(newBoard);
            if (solved === true) {
                count++;
            }else {
                if (count > 1) {
                    count--;
                }
            }
            if (count === 10){
                alert("You Win");
            }
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

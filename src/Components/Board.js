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

    let contained = (arr, item) => {
        let contains = false;
        console.log("contained>>>",arr,item);
        for (let i = 0;  i < arr.length; i++){
            if (arr[i][0] === item[0] && arr[i][1] === item[1]) {
                contains = true;
                console.log(arr[i]);
                console.log("Item: ",item);
            }
        }
        return contains;
    }

    const updateGameBoard = (row, col, value) => {
        // console.log(contained(emptyList, [row, col]))
        if (contained(emptyList, [row, col])) {
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

import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";

const Board = () => {
    const boardList = Game(3);
    let gameBoard = Game(3);
        return (
            <div id="table">
                {/* <Row array={boardList[0]} cls="" />
                <Row array={boardList[1]} cls="" />
                <Row array={boardList[2]} cls="trr" />
                <Row array={boardList[3]} cls="" />
                <Row array={boardList[4]} cls="" />
                <Row array={boardList[5]} cls="trr" />
                <Row array={boardList[6]} cls="" />
                <Row array={boardList[7]} cls="" />
                <Row array={boardList[8]} cls="" /> */}
                <Row array={gameBoard[0]} cls="td" />
                <Row array={gameBoard[1]} cls="td" />
                <Row array={gameBoard[2]} cls="td trr" />
                <Row array={gameBoard[3]} cls="td" />
                <Row array={gameBoard[4]} cls="td" />
                <Row array={gameBoard[5]} cls="td trr" />
                <Row array={gameBoard[6]} cls="td" />
                <Row array={gameBoard[7]} cls="td" />
                <Row array={gameBoard[8]} cls="td" />
            </div>
        );
};
export default Board;

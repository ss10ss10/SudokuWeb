import "../Styles/Board.css";
import Row from "./Row";
import Game from "./Game";

const Board = () => {
    const boardList = Game(3);
        return (
            <div id="table">
                <Row array={boardList[0]} cls="" />
                <Row array={boardList[1]} cls="" />
                <Row array={boardList[2]} cls="trr" />
                <Row array={boardList[3]} cls="" />
                <Row array={boardList[4]} cls="" />
                <Row array={boardList[5]} cls="trr" />
                <Row array={boardList[6]} cls="" />
                <Row array={boardList[7]} cls="" />
                <Row array={boardList[8]} cls="" />
            </div>
        );
};
export default Board;

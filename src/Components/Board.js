import '../Styles/Board.css';
import Row from './Row';
import Game from './Game';

const Board = () => {
    const boardList = Game(3);
    return (
        <div id="table">
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
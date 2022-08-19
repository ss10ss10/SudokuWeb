import '../Styles/Board.css';
import Row from './Row';
import Game from './Game';

const Board = () => {
    const boardList = {
        l : Game(3),
        c : 0,
    }
    return (
        <div id="table">
            <Row {...boardList.l[0]}/>
            <Row {...boardList.l[1]}/>
            <Row {...boardList.l[2]} {...boardList.c}/> 
            <Row {...boardList.l[3]}/>
            <Row {...boardList.l[4]}/>
            <Row {...boardList.l[5]} {...boardList.c}/>
            <Row {...boardList.l[6]}/>
            <Row {...boardList.l[7]}/>
            <Row {...boardList.l[8]}/>
        </div>
    );
}
export default Board;
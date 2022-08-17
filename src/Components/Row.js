import '../Styles/Board.css';

const Row = (props) => {
    return (
        <div className='tr'>
                <div className='td'>{props && props[0]}</div>
                <div className='td'>{props && props[1]}</div>
                <div className='td'>{props && props[2]}</div>
                <div className='td'>{props && props[3]}</div>
                <div className='td'>{props && props[4]}</div>
                <div className='td'>{props && props[5]}</div>
                <div className='td'>{props && props[6]}</div>
                <div className='td'>{props && props[7]}</div>
                <div className='td'>{props && props[8]}</div>
        </div>
    );
}

export default Row;
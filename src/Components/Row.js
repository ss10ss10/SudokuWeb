import "../Styles/Board.css";

const Row = ({ array, cls }) => {
    const handleClick = (e) => {
        
    }
        return (
            <div className="tr">
                {/* <div className={"td " + cls}>{array && array[0]}</div>
                <div className={"td " + cls}>{array && array[1]}</div>
                <div className={"tdd " + cls}>{array && array[2]}</div>
                <div className={"td " + cls}>{array && array[3]}</div>
                <div className={"td " + cls}>{array && array[4]}</div>
                <div className={"tdd " + cls}>{array && array[5]}</div>
                <div className={"td " + cls}>{array && array[6]}</div>
                <div className={"td " + cls}>{array && array[7]}</div>
                <div className={"td " + cls}>{array && array[8]}</div> */}
                {array?.map((item, i) => (
                <div    key={i} 
                        className={cls} 
                        onClick={() => handleClick(i)}>
                            {item}
                </div>))}
            </div>
        );
};
export default Row;
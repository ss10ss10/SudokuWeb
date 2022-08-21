const DisplayBoard = (dispBoard, difficulty) => {
    let final;

    const removeRandom = (arr, n) => {
        let count = 0;
        while (count < n) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
            if (arr[row][col] !== '') {
                arr[row][col] = '';
                count++;
            }
        }
        return arr;
    }
    
    switch (difficulty) {
        case 1:
            final = removeRandom(dispBoard, difficulty * 10);
            break;
        case 2:
            final = removeRandom(dispBoard, difficulty * 10);
            break;
        case 3:
            final = removeRandom(dispBoard, difficulty * 10);
            break;
        default:
            final = removeRandom(dispBoard, difficulty * 10);
    }
    return final
}

export default DisplayBoard;
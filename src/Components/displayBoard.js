const displayBoard = (dispBoard, difficulty) => {
    let final;
    let emptyList = []
    const removeRandom = (arr, n) => {
        let count = 0;
        while (count < n) {
            let row = Math.floor(Math.random() * 9);
            let col = Math.floor(Math.random() * 9);
            if (arr[row][col] !== '') {
                arr[row][col] = '';
                emptyList.push([row, col]);
                count++;
            }
        }
        return arr;
    }
    final = removeRandom(dispBoard, difficulty * 10);
    return [final, emptyList];
}

export default displayBoard;
const win = (arr, arr2) => {
    let winCon = true;

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === '' || arr[i][j] !== arr2[i][j]) {
                winCon = false;
                break;
            }
        }
    }
    return winCon;
}
export default win;
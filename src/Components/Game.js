const Game = (g) => {
    const game1 = [[4, 3, 5, 2, 6, 9, 7, 3, 1], [6, 8, 2, 5, 7, 1, 4, 9, 3], [1, 9, 7, 8, 3, 4, 5, 6, 2],
                  [8, 2, 6, 1, 9, 5, 3, 4, 7], [3, 7, 4, 6, 8, 2, 9, 1, 5], [9, 5, 1, 7, 4, 3, 6, 2, 8],
                  [5, 1, 9, 3, 2, 6, 8, 7, 4], [2, 4, 8, 9, 5, 7, 1, 3, 6], [7, 6, 3, 4, 1, 8, 2, 5, 9]];

    const game2 = [[1, 5, 2, 4, 8, 9, 3, 7, 6], [7, 3, 9, 2, 5, 6, 8, 4, 1], [4, 6, 8, 3, 7, 1, 2, 9, 5],
                  [3, 8, 7, 1, 2, 4, 6, 5, 9], [5, 9, 1, 7, 6, 3, 4, 2, 8], [2, 4, 6, 8, 9, 5, 7, 1, 3],
                  [9, 1, 4, 6, 3, 7, 5, 8, 2], [6, 2, 5, 9, 4, 8, 1, 3, 7], [8, 7, 3, 5, 1, 2, 9, 6, 4]];

    const game3 = [[5, 3, 4, 6, 7, 8, 9, 1, 2], [6, 7, 2, 1, 9, 5, 3, 4, 8], [1, 9, 8, 3, 4, 2, 5, 6, 7],
                  [8, 5, 9, 7, 6, 1, 4, 2, 3], [4, 2, 6, 8, 5, 3, 7, 9, 1], [7, 1, 3, 9, 2, 4, 8, 5, 6],
                  [9, 6, 1, 5, 3, 7, 2, 8, 4], [2, 8, 7, 4, 1, 9, 6, 3, 5], [3, 4, 5, 2, 8, 6, 1, 7, 9]];

    const game4 = [[9, 5, 7, 6, 1, 3, 2, 8, 4], [4, 8, 3, 2, 5, 7, 1, 9, 6], [6, 1, 2, 8, 4, 9, 5, 3, 7],
                  [1, 7, 8, 3, 6, 4, 9, 5, 2], [5, 2, 4, 9, 7, 1, 3, 6, 8], [3, 6, 9, 5, 2, 8, 7, 4, 1],
                  [8, 4, 5, 7, 9, 2, 6, 1, 3], [2, 9, 1, 4, 3, 6, 8, 7, 5], [7, 3, 6, 1, 8, 5, 4, 2, 9]];
    
    const game5 = [[2, 7, 6, 3, 1, 4, 9, 5, 8], [8, 5, 4, 9, 6, 2, 7, 1, 3], [9, 1, 3, 8, 7, 5, 2, 6, 4],
                  [4, 6, 8, 1, 2, 7, 3, 9, 5], [5, 9, 7, 4, 3, 8, 6, 2, 1], [1, 3, 2, 5, 9, 6, 4, 8, 7],
                  [3, 2, 5, 7, 8, 9, 1, 4, 6], [6, 4, 1, 2, 5, 3, 8, 7, 9], [7, 8, 9, 6, 4, 1, 5, 3, 2]];

    
    let final;
    switch (g) {
        case 1:
            final = game1;
            break;
        case 2:
            final = game2;
            break;
        case 3:
            final = game3;
            break;
        case 4:
            final = game4;
            break;
        case 5:
            final = game5;
            break;
        default:
            final = Array.from(Array(9), () => new Array(9).fill(0));
    }
    return (final);
}
export default Game;
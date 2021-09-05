const playerFactory = (name, symbol) => {
    return {name, symbol};
};

const player1 = playerFactory('player1', 'X');
const player2 = playerFactory('player2', 'O');

const gameBoard = (() => {
    const board = [
        ['O', 'X', 'O'],
        ['O', 'X', 'O'],
        ['X', 'O', 'X']
    ];
    return{
        board
    };
})();

const displayController = (() => {
    const board = document.getElementById('board');
    board.replaceChildren();
    for(let i=0; i<=2; i++){
        for(let j=0; j<=2; j++){
            const cell = document.createElement('div');
            const symbol = document.createElement('h1');
            symbol.textContent = gameBoard.board[i][j];
            cell.appendChild(symbol);
            board.appendChild(cell);
        }
    }
    return { board };
})();
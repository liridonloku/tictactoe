const playerFactory = (name, symbol) => {
    return {name, symbol};
};

const player1 = playerFactory('player1', 'X');
const player2 = playerFactory('player2', 'O');

const gameBoard = (() => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let turn = 'player1';
    const play = (e) => {
        let symbol;
        if(turn === player1.name || turn === ''){
            symbol = player1.symbol;
            turn = player2.name;
        }
        else{
            symbol = player2.symbol;
            turn = player1.name;
        }
        if(e.target.textContent === ''){
            e.target.textContent = symbol;
        }
    }
    return{
        board, play
    };
})();

const game = (() => {
    const board = document.getElementById('board');
    board.replaceChildren();
    for(let i=0; i<=2; i++){
        for(let j=0; j<=2; j++){
            const cell = document.createElement('div');
            cell.textContent = gameBoard.board[i][j];
            board.appendChild(cell);
            cell.addEventListener('click', gameBoard.play);
        }
    }
})();
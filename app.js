const playerFactory = (name, symbol) => {
    return {name, symbol};
};

const players = (() => {
    const player1 = playerFactory('player1', 'X');
    const player2 = playerFactory('player2', 'O');
    const checkGameEnd = () =>{
        const board = gameBoard.board;
        let a = board[0][0];
        let b = board[0][1];
        let c = board[0][2];
        let d = board[1][0];
        let e = board[1][1];
        let f = board[1][2];
        let g = board[2][0];
        let h = board[2][1];
        let i = board[2][2];
        //conditions for player1 winning
        if(a===b&&a===c&&a==='X'||d===e&&d===f&&d==='X'||g===h&&g===i&&g==='X'||a===d&&a===g&&a==='X'||b===e&&b===h&&b==='X'||c===f&&c===i&&c==='X'||a===e&&a===i&&a==='X'||c===e&&c===g&&c==='X'){
            console.log('Player 1 Wins');
        }
        //conditions for player2 winning
        else if(a===b&&a===c&&a==='O'||d===e&&d===f&&d==='O'||g===h&&g===i&&g==='O'||a===d&&a===g&&a==='O'||b===e&&b===h&&b==='O'||c===f&&c===i&&c==='O'||a===e&&a===i&&a==='O'||c===e&&c===g&&c==='O'){
            console.log('Player 2 Wins');
        }
        //condition for tie
        else if(!(a===''||b===''||c===''||d===''||e===''||f===''||g===''||h===''||i==='')){
            console.log('Tie');
        }
    }
    return {
        player1, player2, checkGameEnd
    };
})();


const gameBoard = (() => {
    const board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let turn = '';
    const play = (e) => {
        let symbol;
        if(e.target.textContent === ''){
            if(turn === players.player1.name || turn === ''){
                symbol = players.player1.symbol;
                turn = players.player2.name;
            }
            else{
                symbol = players.player2.symbol;
                turn = players.player1.name;
            }
            board[e.target.getAttribute('data1')][e.target.getAttribute('data2')]=symbol;
            e.target.textContent = symbol;
        }
        players.checkGameEnd();
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
            cell.setAttribute('data1',`${i}`);
            cell.setAttribute('data2',`${j}`);
            cell.textContent = gameBoard.board[i][j];
            board.appendChild(cell);
            cell.addEventListener('click', gameBoard.play);
        }
    }
})();
const gameController = () => {
    const board = gameBoard();
    const players = [
        player("Player One", "X"),
        player("Player TWo", "O")
    ]

    let activePlayer = players[0];
    let winner;
    let isItTight;
    let rounds = 1

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer;
    
    const printNewRound = () => {
        switchPlayerTurn();
        console.log(`it is ${getActivePlayer().getPlayerName()}'s turn`);

    }

    const printBoard = () => {
        let consoleBoard = "\n"
        for(let i= 0; i<3; i++){
            for(let j=0; j<3; j++){
                consoleBoard = consoleBoard + board.getBoard()[i][j].getMark().mark + " ";
            }
            consoleBoard = consoleBoard + "\n";
        }
        console.log(consoleBoard)
    }

    const playRound = () => {
        let row, column
        while(!winner && rounds <= 9){
            console.log("round: " + rounds);
            console.log("Active Player is: " + getActivePlayer().getPlayerName());            
            printBoard();
            row =  prompt("select row");
            column = prompt("select column")
            board.setMark(row, column, getActivePlayer());
            rounds = rounds + 1;
            console.log("round done, checking winner");
            checkWinner();
            printNewRound();
        }
    }

    const compareCell = (row1, col1, row2, col2, row3, col3) => {
        if(board.getBoard()[row1][col1].getMark().mark === board.getBoard()[row2][col2].getMark().mark && board.getBoard()[row1][col1].getMark().mark === board.getBoard()[row3][col3].getMark().mark &&
            board.getBoard()[row1][col1].getMark().isMarked && board.getBoard()[row2][col2].getMark().isMarked && board.getBoard()[row3][col3].getMark().isMarked){
                return true
            }
    }

    const checkWinner = () => {
        if(
            //rows
            compareCell(0,0,0,1,0,2)
            ||
            compareCell(1,0,1,1,1,2)
            ||
            compareCell(2,0,2,1,2,2)
            ||
            //columns
            compareCell(0,0,1,0,2,0)
            ||
            compareCell(0,1,1,1,2,1)
            ||
            compareCell(0,2,1,2,2,2)
            ||
            //diagonals
            compareCell(0,0,1,1,2,2)
            ||
            compareCell(2,0,1,1,2,0)
        ){
            winner = getActivePlayer()
            console.log(`the winner is ${getActivePlayer().getPlayerName()}`)
        }
    }

    return {
        playRound,
        getActivePlayer, 
        players
    }
}

const game = gameController();

game.playRound()
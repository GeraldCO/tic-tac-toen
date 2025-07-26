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

    const checkWinner = () => {
        if(
            //rows 
            board.getBoard()[0][0].getMark().mark === board.getBoard()[0][1].getMark().mark && board.getBoard()[0][0].getMark().mark === board.getBoard()[0][2].getMark().mark &&
            board.getBoard()[0][0].getMark().isMarked && board.getBoard()[0][1].getMark().isMarked && board.getBoard()[0][2].getMark().isMarked
            ||
            board.getBoard()[1][0].getMark().mark === board.getBoard()[1][1].getMark().mark && board.getBoard()[1][0].getMark().mark === board.getBoard()[1][2].getMark().mark &&
            board.getBoard()[1][0].getMark().isMarked && board.getBoard()[1][1].getMark().isMarked && board.getBoard()[1][2].getMark().isMarked
            ||
            board.getBoard()[2][0].getMark().mark === board.getBoard()[2][1].getMark().mark && board.getBoard()[2][0].getMark().mark === board.getBoard()[2][2].getMark().mark &&
            board.getBoard()[2][0].getMark().isMarked && board.getBoard()[2][1].getMark().isMarked && board.getBoard()[2][2].getMark().isMarked
            ||
            //columns
            board.getBoard()[0][0].getMark().mark === board.getBoard()[1][0].getMark().mark && board.getBoard()[0][0].getMark().mark === board.getBoard()[2][0].getMark().mark &&
            board.getBoard()[0][0].getMark().isMarked && board.getBoard()[1][0].getMark().isMarked && board.getBoard()[2][0].getMark().isMarked
            ||
            board.getBoard()[0][1].getMark().mark === board.getBoard()[1][1].getMark().mark && board.getBoard()[0][1].getMark().mark === board.getBoard()[2][1].getMark().mark &&
            board.getBoard()[0][1].getMark().isMarked && board.getBoard()[1][1].getMark().isMarked && board.getBoard()[2][1].getMark().isMarked
            ||
            board.getBoard()[0][2].getMark().mark === board.getBoard()[1][2].getMark().mark && board.getBoard()[0][2].getMark().mark === board.getBoard()[2][2].getMark().mark &&
            board.getBoard()[0][2].getMark().isMarked && board.getBoard()[1][2].getMark().isMarked && board.getBoard()[2][2].getMark().isMarked
            ||
            //diagonals
            board.getBoard()[0][0].getMark().mark === board.getBoard()[1][1].getMark().mark && board.getBoard()[0][0].getMark().mark === board.getBoard()[2][2].getMark().mark &&
            board.getBoard()[0][0].getMark().isMarked && board.getBoard()[1][1].getMark().isMarked && board.getBoard()[2][2].getMark().isMarked
            ||
            board.getBoard()[2][0].getMark().mark === board.getBoard()[1][1].getMark().mark && board.getBoard()[2][0].getMark().mark === board.getBoard()[0][2].getMark().mark &&
            board.getBoard()[2][0].getMark().isMarked && board.getBoard()[1][1].getMark().isMarked && board.getBoard()[2][0].getMark().isMarked
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
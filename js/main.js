const cell = ()=>{
    let player = {};
    let isMarked = false;
    let mark = "empty";
    
    const getMark = () =>{
        return {
           player: player,
           isMarked: isMarked,
           mark: mark
        }
    }

    const setMark = (newPlayer) => {
        player = newPlayer;
        isMarked = true;
        mark = newPlayer.getPlayerMark();
    }
    
    return {
        getMark, setMark 
    }
}

const player = (playerName, mark) => {
    this.playerName = playerName;
    this.mark = mark

    const getPlayerName = () => this.playerName
    const getPlayerMark = () => this.mark

    return {
        getPlayerMark, getPlayerName
    }
}

const gameBoard = () => {
    const rows = 3;
    const columns = 3;
    const board = []

    for(let i=0; i < rows; i++){
        board[i] = []
        for(let j=0; j<columns; j++){
            board[i].push(cell());
        }
    }

    const getBoard = () => board
    const setMark = (row, column, player) => {
        board[row][column].cell.setMark(player.getPlayerMark())
    }

    return{
        getBoard, setMark
    }
    
}

const gameController = (
    playerOneName = "Player One",
    playerTwoName = "Player Two"
) => {
    const board = gameBoard();
    const players = [
        player(playerOneName, "X"),
        player(playerTwoName, "O")
    ]
    let activePlayer = players[0];
    let winner;
    let isItTight;
    let rounds = 0

    const switchPlayerTurn = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer;
    
    const printNewRound = () => {
        console.log(`it is ${getActivePlayer().getPlayerName()}'s turn`);
        switchPlayerTurn(); 

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
        while(!winner || rounds < 9){
            
            console.log("rounds" + rounds)
            printBoard();
            row =  0 //prompt("select row");
            column = 1  //prompt("select column")
            //.setMark(row, column, players[0] );
            rounds = rounds++;
            console.log("round done, checking winner");
            checkWinner();
            printNewRound();
        }
    }

    const checkWinner = () => {
        if(
            //rows
            
            board.getBoard()[0][0].getMark().mark === board.getBoard()[0][1].getMark().mark ===board.getBoard()[0][2].getMark().mark ||
            board.getBoard()[1][0].getMark().mark === board.getBoard()[1][1].getMark().mark === board.getBoard()[1][2].getMark().mark ||
            board.getBoard()[2][0].getMark().mark === board.getBoard()[2][1].getMark().mark === board.getBoard()[2][2].getMark().mark ||
            //columns
            board.getBoard()[0][0].getMark().mark === board.getBoard()[1][0].getMark().mark === board.getBoard()[2][0].getMark().mark ||
            board.getBoard()[0][1].getMark().mark === board.getBoard()[1][1].getMark().mark === board.getBoard()[2][1].getMark().mark ||
            board.getBoard()[0][2].getMark().mark === board.getBoard()[1][2].getMark().mark === board.getBoard()[2][2].getMark().mark ||
            //diagonals
            board.getBoard()[0][0].getMark().mark === board.getBoard()[1][1].getMark().mark === board.getBoard()[2][2].getMark().mark ||
            board.getBoard()[2][0].getMark().mark === board.getBoard()[1][1].getMark().mark === board.getBoard()[0][2].getMark().mark 
        ){
            winner = getActivePlayer()
            console.log(`the winner is ${getActivePlayer.name}`)
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



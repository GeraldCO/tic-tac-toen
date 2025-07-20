const cell = ()=>{
    let player = {};
    let isMarked = false;
    let mark = "";
    
    const getMark = () =>{
        return {
           player: this.player,
           isMarked: this.isMarked,
           mark: this.mark
        }
    }

    const setMark = (player) => {
        this.player = player;
        this.isMarked = true;
        this.mark = player.getPlayerMark();
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
            board[i].push(cell);
        }
    }

    const getBoard = () => {
        console.log(board);
    }
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

    const playRound = () => {
        let row, column
        while(!winner || rounds < 9){
            
            console.log("rounds" + rounds)
            board.getBoard();
            row =  0 //prompt("select row");
            column = 1  //prompt("select column")
            //.setMark(row, column, players[0] );
            if(board){
                console.log(board.getBoard()[0][1].setMark("gato"));

                
            }
            rounds = rounds++;
            console.log("round done, checking winner");
            checkWinner();
            printNewRound();
        }
    }

    const checkWinner = () => {
        if(
            //rows
            board[0][0].cell.getMark() === board[0][1].cell.getMark() === board[0][2].cell.getMark() ||
            board[1][0].cell.getMark() === board[1][1].cell.getMark() === board[1][2].cell.getMark() ||
            board[2][0].cell.getMark() === board[2][1].cell.getMark() === board[2][2].cell.getMark() ||
            //columns
            board[0][0].cell.getMark() === board[1][0].cell.getMark() === board[2][0].cell.getMark() ||
            board[0][1].cell.getMark() === board[1][1].cell.getMark() === board[2][1].cell.getMark() ||
            board[0][2].cell.getMark() === board[1][2].cell.getMark() === board[2][2].cell.getMark() ||
            //diagonals
            board[0][0].cell.getMark() === board[1][1].cell.getMark() === board[2][2].cell.getMark() ||
            board[2][0].cell.getMark() === board[1][1].cell.getMark() === board[0][2].cell.getMark() 
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



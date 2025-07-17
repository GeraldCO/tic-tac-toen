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
        this.mark = player.getMark();
    }
    
    return {
        getMark, setMark 
    }
}

const player = (playerName, mark) => {
    this.playerName = playerName;
    this.mark = mark

    const getPlayerName = () => this.playerName
    const getPlayerMakr = () => this.mark

    return {
        getPlayerMakr, getPlayerName
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

    const getBoard = () => board;

    return{
        getBoard, 
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
    let winner

    const switchPlayer = () => {
        activePlayer = activePlayer === players[0] ? players[1] : players[0]
    }

    const getActivePlayer = () => activePlayer;
    const printNewRound = () => {
        console.log(`it is ${getActivePlayer().name}'s turn`);
    }

    const playRound = () => {
        
    }

    const checkWinner = () => {
        if(
            //rows
            board[0][0] === board[0][1] === board[0][2] ||
            board[1][0] === board[1][1] === board[1][2] ||
            board[2][0] === board[2][1] === board[2][2] ||
            //columns
            board[0][0] === board[1][0] === board[2][0] ||
            board[0][1] === board[1][1] === board[2][1] ||
            board[0][2] === board[1][2] === board[2][2] ||
            //diagonals
            board[0][0] === board[1][1] === board[2][2] ||
            board[2][0] === board[1][1] === board[0][2] 
        ){
            winner = getActivePlayer()
            console.log(`the winner is ${getActivePlayer.name}`)
        }
    }


}


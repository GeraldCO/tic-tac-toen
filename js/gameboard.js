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
        board[row][column].setMark(player)        
    }

    return{
        getBoard, setMark
    }
    
}
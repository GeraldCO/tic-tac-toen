const cell = ()=>{
    let player = {};
    let isMarked = false;
    let mark = "-";
    
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
import { useState } from "react";

const LudoBoard = () => {
    let [moves, setMoves] = useState({
        blue: 0, red: 0, yellow: 0, green: 0
    });
     function updateBlue ()  {
        setMoves((prevMoves) => {
            return {...prevMoves, blue: prevMoves.blue += 1}
        });
    }
    function updateYellow() {
        setMoves((prevMoves) => {
            return {...prevMoves, yellow: prevMoves.yellow += 1}
        });
    }
    function updateGreen()  {
        setMoves((prevMoves) => {
            return {...prevMoves, green: prevMoves.green += 1}
        });
    }
    function updateRed ()  {
        setMoves((prevMoves) => {
            return {...prevMoves, red: prevMoves.red += 1}
        });
    }
    return(
        <>
         <p>Game Begins</p>
         <div className="board">
            <p>Blue moves ={moves.blue} </p>
            <button onClick={updateBlue} style={{backgroundColor: "blue"}}>+1</button>
            <p>Yellow moves ={moves.yellow} </p>
            <button onClick={updateYellow} style={{backgroundColor: "yellow"}}>+1</button>
            <p>Green moves ={moves.green} </p>
            <button onClick={updateGreen} style={{backgroundColor: "green"}}>+1</button>
            <p>Red moves = {moves.red}</p>
            <button onClick={updateRed} style={{backgroundColor: "red"}}>+1</button>
         </div>

        </>
    )
}

export default LudoBoard;
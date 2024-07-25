import { useState } from "react";
import { generateTicket, sum } from "./Helper.js";
import Ticket from "./Ticket.jsx";

const Lottery = ({n = 3, winningSum}) => {
    let [ticket, setTicket] = useState([""]);
    let [sumNUM, setSumNUM] = useState(0)
    let [roll, setRoll] = useState(0)
    let [winCount, setWinCount] = useState(0);
    let [amount, setAmount] = useState(0)
    let [cost, setCost] = useState(0);

    // console.log(ticket)

    let isWinning =  winningSum(ticket);

    const buyNewTicket = () => {
            setCost(cost += 200)
            setRoll(roll += 1)
            setTicket((prevTicket) => {
            let arry = generateTicket(n);
            setSumNUM(sum(arry))
            let total = sum(arry);
            let isTrue = total == 15;
            if(isTrue){
                setWinCount(winCount += 1);
                setAmount(amount += 1500)
            }            
            return arry;
        })
    }
    
    let styleRed = {
        backgroundColor: "red",
        padding: "10px",
        color: "white",
        borderRadius: "10px",
        marginTop: "10px",
        fontWeight: "bold",
    } 
    let styleGreen = {
        backgroundColor: "green",
        padding: "10px",
        color: "white",
        borderRadius: "10px",
        marginTop: "10px",
        fontWeight: "bold",
    }  
    return(
        <div>
            <h1>Lottery Game!</h1>
            <div className="rule">
                Rule: if you have random number total sum = 15, you can win Rs. 1,500/-
            </div>
            <div className="ticket">
                <Ticket ticket={ticket}/>
                <span>=</span>
                <span>{sumNUM}</span>
            </div>
            <h2 className="won">{isWinning && "Congratulation, You Won!" || "Try Again"}...</h2>
            <p onClick={buyNewTicket} className="buy">Buy New Ticket Click Here !!!<p className="ticketPerAmount">per ticket amount Rs. 200/-</p>
            <p className="ticketPerAmount">Your Total Cost: Rs.{cost}/-</p></p>
            <span className="playerCount">Roll Count: {roll}</span>
            <div className="playerCount">Winning Count: {winCount}</div>
            
            <div className="won">Total Winning Amount Rs. {amount}</div>
            <div style={cost > amount ? styleRed : styleGreen}>{cost > amount ? `You are in losses (Total Losses = ${cost - amount}) ` : `You are in Profit (Your Profit = ${amount - cost})`}</div>
        </div>
    )
}

export default Lottery;
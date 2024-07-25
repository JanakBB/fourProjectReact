import TicketNum from "./TicketNum.jsx";

const Ticket = ({ticket}) => {
    return (
        <>
            {ticket.map((ticNum, i) => (
                <TicketNum num={ticNum} key={i}/>

            ))}
        </>
    )
}

export default Ticket;
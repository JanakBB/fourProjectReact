const printHello = (event) => {
    console.log("Hello!");
    console.log(event);
}

const printBy = () => {
    console.log("Bye");
}

export default function Button(){
    return(
        <div>
            <button onClick={printHello}>Click me</button>
            <p onMouseOver={printBy}>This para is for demo</p>
        </div>
    )
}
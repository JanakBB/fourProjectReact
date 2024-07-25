const Price = ({oldPrice, newPrice}) => {
    let oldStyles = {
        textDecorationLine: "Line-through",
    };
    let newStyle = {
        fontWeight: "bold",
    };
    let styles = {
        backgroundColor: "blue",
        height: "30px",
        borderBottomLeftRadius: "14px",
        borderBottomRightRadius: "14px",
        color: "white",
        padding: "2px"
    }
    return(
        <div style={styles}>
            <span style={oldStyles}>Old Price: {oldPrice}</span>
            &nbsp;&nbsp;&nbsp;
            <span style={newStyle}>New Price: {newPrice}</span>
        </div>
    )
}

export default Price;
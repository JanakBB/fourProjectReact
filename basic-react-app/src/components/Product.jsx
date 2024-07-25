import "../styles/Product.css";
import Price from "./Price.jsx";

const Product = ({title, idx}) => {
    let oldPrice = ["1,05,000", "1,25,000", "1,60,000", "1,75,000"];
    let newPrice = ["1,10,000", "1,30,000", "1,70,000", "1,80,000"];
    let description = [
        ["This is ipad pro max", "11 inches"],
        ["light wight ipad pro", "200gm total weight"],
        ["liquied arean display", "eye protected"],
        ["wifi is 6.0 ipad", "large network system"]
    ]
    return(
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}

export default Product;
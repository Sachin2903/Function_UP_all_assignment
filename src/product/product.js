import { Fragment } from "react";
export function Product(props) {
    function onpress() {
        alert(`${props.productName} Shoes worth ${props.price} is added in Your cart, please proceed to pay`);
    }

    return (
        <Fragment>
            <div style={{ backgroundColor: "#ffffff", width: "20em", height: "28em", boxShadow: " 5px 18px 8px #888888", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <img src={props.productPic} alt="" style={{ width: "10em", height: "7em", position: "relative", bottom: "-1em", boxShadow: "5px 10px 8px #888888" }} />
                <p style={{ fontWeight: "bold", fontSize: "1.3em", position: "relative", bottom: "-1.2em" }}>{props.productName}</p>
                <p style={{ fontSize: "1em" }}>{props.productDes}</p>
                <p style={{ fontWeight: "bold", fontSize: "1.25em", color: props.color }}>{props.price}</p>
                <p style={{ fontSize: "1.19em" }}>{props.rating}</p>
                <button onClick={onpress} style={{ width: "100%", height: "12%", fontSize: "1.2em", fontWeight: "bold", backgroundColor: props.color, border: "0px" }}>ADD TO CART</button>
            </div>
        </Fragment>

    )
}
import { Fragment } from "react";
export function Product(props) {
    
  function onpress() {
        alert(`${props.ley.productName} Shoes worth ${props.ley.price} is added in Your cart, please proceed to pay`);
    }

    return (
        <Fragment>
            <div style={{ backgroundColor: "#ffffff", width: "20em", height: "28em", boxShadow: " 5px 18px 8px #888888", display: "flex", flexDirection: "column", justifyContent: "space-between", alignItems: "center" }}>
                <img src={props.ley.productPic} alt="" style={{ width: "10em", height: "7em", position: "relative", bottom: "-1em", boxShadow: "5px 10px 8px #888888" }} />
                <p style={{ fontWeight: "bold", fontSize: "1.3em", position: "relative", bottom: "-1.2em" }}>{props.ley.productName}</p>
                <p style={{ fontSize: "1em" }}>{props.ley.productDes}</p>
                <p style={{ fontWeight: "bold", fontSize: "1.25em", color: props.ley.color }}>{props.ley.price}</p>
                <p style={{ fontSize: "1.19em" }}>{props.ley.rating}</p>
                <button onClick={onpress} style={{ cursor:"pointer", width: "100%", height: "12%", fontSize: "1.2em", fontWeight: "bold", backgroundColor: props.ley.color, border: "0px" }}>ADD TO CART</button>
            </div>
        </Fragment>

    )
}
import { Fragment } from "react"
import "./usercard.css"
export function Usercard(props) {
    return (
        <Fragment>
            <div className={props.divclass}>
                <img className="cardimg" src={props.details.avatar} alt="loading..." />
                <p className="cardid">{props.details.id}</p>
                <p className="cardname">{`${props.details.first_name} ${props.details.last_name}`}</p>
                <p className="cardemail">{props.details.email}</p>




            </div>



        </Fragment>


    )
}
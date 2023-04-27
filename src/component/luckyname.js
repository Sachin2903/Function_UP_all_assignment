import { Fragment } from "react"
import './luckygame.css';
import { useState } from "react";
export function Luckygame() {
    const [number, setnumber] = useState("");
    const [count, setcount] = useState(1)
    const [luckyNumber, setluckyNumber] = useState(Math.floor((Math.random() * 25) + 1));
    console.log(luckyNumber);
    function onname(num) {

        setnumber(num.target.value);
    }
    function onmess() {
        setcount(count + 1 );
        if (!number) {
            alert("Please enter a number")
            return;
        }
        else if (number == luckyNumber) {
            alert(`congratulations you guessed the right number in ${count} attempts`)
            setluckyNumber(Math.floor((Math.random() * 25) + 1))
            setcount(1);
        }
        else if (number < luckyNumber) {
            alert("you guessed a smaller number");
        }
        else {
            alert("you guessed a larger number");
        }
        setnumber("");
    }


    return (
        <Fragment>
            <div className="form">
                <span><input onChange={onname} className="input" placeholder="  Guess a lucky number " type="number" min="1" max="25" value={number} />
                    <button onClick={onmess} className="button">Submit</button></span>
                <h1 className="heading">Guess a number from 1 to 25 </h1>
            </div>
        </Fragment>
    )
}
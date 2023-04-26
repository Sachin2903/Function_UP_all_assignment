import { Fragment } from "react"
import './nameUpdate.css';
import { useState } from "react";
export function NameUpdate(){
    let [name,setname]=useState("");
    let [mess,setmess]=useState("****")
    
    function onname(nam){
       
        setname(nam.target.value);
    }
    function onmess(){
        setmess(name)
        setname("")

        
    }
    return(
        <Fragment>
            <div className="form">
                <span><input onChange={onname} className="input" placeholder="     Add your name ...." type="text" value={name}/>
                <button onClick={onmess} className="button">Submit</button></span>
                <h1 className="heading">Hi may name is  : {mess} </h1>
            </div>


        </Fragment>


    )
}
import { Fragment } from "react";


export default function Card(props){
    function onclickfun(){
        alert(props.name);
    }
    return (
       <Fragment>
             <div style={{background:"#ce00afe8", width:"20vw",height:"45vh",borderRadius:"2em" ,padding:"3em",boxShadow: ".3em 0.4em  #888888"}}>
                
                <img src={props.photo} style={{height:"3.5em" , borderRadius: "100%",border: "0.25em solid #fff",cursor:"none"}}/>
                <p style={{color:"#ffffff",fontSize:"1.2rem"}}>{props.designation}<br/></p>
                <p style={{color:"#ffffff" , fontWeight:"bold",fontSize:"1.5rem",position:"relative",top:"-.6em"}}>{props.name}</p>
                <p style={{color:"#ffffff",fontSize:"1.1rem",position:"relative",top:"-.6em"}}>{props.jobdes}</p>
                <button onClick={onclickfun} style={{fontWeight:"bold",background:"rgb(0, 252, 193)" ,border:"0.2em solid black",borderRadius:"25%",height:"2.5em",cursor:"pointer",boxShadow: ".1em 0.1em  black",fontSize:"0.8em"}}>See More...</button>
                
             </div>



       </Fragment>
      

    )
}
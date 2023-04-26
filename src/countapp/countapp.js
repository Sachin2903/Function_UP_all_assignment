import { Fragment } from "react";
import {useState} from 'react';

export  function Countapp(){
    let [count,setcount]=useState(0);
   function addfun(){
      setcount(++count)

   } 
   function subfun(){
    if(count>0)
     setcount(--count)
   }
   
 return(
    <Fragment>
        <div style={{backgroundColor:"#ffffff" ,width:"25em" ,height:"35em",display:"flex",flexDirection:"column" ,justifyContent:"center",boxShadow:"1em 1em 4em black"}}>
            <p style={{fontWeight:"bold",fontSize:"8em" }}>{count}</p>
            <span>
                <button onClick={addfun} style={{color:"black",background:"yellow" ,marginRight:"5em" ,cursor:"pointer"}}>Add</button>
                <button onClick={subfun} style={{color:"black",background:"lightgreen", cursor:"pointer"}}>Sub</button>
            </span>
        </div>



    </Fragment>
 )

}
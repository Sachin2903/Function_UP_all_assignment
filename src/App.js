import { Fragment } from 'react';
import './App.css';
import {Product} from './product/product.js'


function App() {
  
  const arr=[{
    productPic:"fashion4.jpg",
    color:"red" ,
     productName:"ADIDAS",
      productDes:"Our design teams developed these lightweight men's running shoes" ,
      price:"30$" ,
    rating:"Rating : 4"
},
{
  productPic:"fashion3.jpg",
  color:"green",
    productName:"NIKE" ,
    productDes:"Our design teams developed these lightweight men's running shoes",
     price:"50$",
      rating:"Rating : 5"

},
{
  productPic:"fashion5.jpg",
  color:"yellow",
    productName:"Pumma" ,
    productDes:"Our design teams developed these lightweight men's running shoes",
     price:"35$",
      rating:"Rating : 3"

}

]
  
  return (
    <Fragment>
    <div style={{width:"100vw",height:"100vh",display:"flex",justifyContent:"space-around",alignItems:"center" ,textAlign:"center"}}>
      {[arr[0],arr[1],arr[2]].map((obj,i) => <Product key={i*10} ley={obj}/>)}
   </div>
    </Fragment>
  );
}

export default App;

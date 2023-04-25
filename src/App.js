import { Fragment } from 'react';
import './App.css';
import {Product} from './product/product.js'
import l1 from './fashion1.jpg'
import l2 from './fashion2.jpg'
import l3 from './fashion3.jpg'
import l4 from './fashion4.jpg'
import l5 from './fashion5.jpg'
function App() {
  
  return (
    <Fragment>
    <div style={{width:"100vw",height:"50vh",display:"flex",justifyContent:"space-around",alignItems:"center" ,textAlign:"center"}}>
     <Product color="red" productPic={l1} productName="ADIDAS" productDes="Our design teams developed these lightweight men's running shoes" price="30$" rating="Rating : 4"/>
     <Product color="green" productPic={l2} productName="NIKE" productDes="Our design teams developed these lightweight men's running shoes" price="50$" rating="Rating : 5"/>
     <Product color="red" productPic={l3} productName="PUMMA" productDes="Our design teams developed these lightweight men's running shoes" price="35$" rating="Rating : 3"/>
    </div>
    <div style={{width:"100vw",height:"50vh",display:"flex",justifyContent:"space-around",alignItems:"center",textAlign:"center"}}>
    <Product color="blue" productPic={l4} productName="CAMPUS" productDes="Our design teams developed these lightweight men's running shoes" price="15$" rating="Rating : 5"/>
    <Product color="yellow" productPic={l5} productName="JORDEN" productDes="Our design teams developed these lightweight men's running shoes" price="25$" rating="Rating : 4"/>
    </div >
    </Fragment>
  );
}

export default App;

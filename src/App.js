import { Usercard } from "./components/organisms/usercard/usercard.js"
import './App.css';
import { useState } from 'react';
import { Button } from "./components/Atoms/button/button.js";
function App() {

  const [a, seta] = useState([])
  async function changeset() {
    const responce = await fetch("https://reqres.in/api/users/")
    const cardValueObj = await responce.json();
    seta(cardValueObj.data)

  }
  return (
    <div className="App">

      <Button btnclass="btn" btnclickfun={changeset} btnname="Get Users" />

      <div className='div2'>

        {
          a.map((e, i) => <Usercard key={i * e.id} details={e} divclass="carddiv" />)
        }

      </div>

    </div>
  );
}

export default App;

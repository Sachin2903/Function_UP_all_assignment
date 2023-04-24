import Card from './profilecard/card'
import './App.css';
import pic1 from './gamer.png'
import pic2 from './man.png'
import pic3 from './hacker.png'

function App() {
  return (
    <div className="App">
     <Card photo={pic1} name="Sachin Chaturvedi" designation="Traniee Frontend Developer" jobdes="work with our designers to improve usability for our customers and optimize web design for mobile and other platforms for maximum speed."/>
     <Card photo={pic2} name="Sachin  Bharadwaj" designation="Frontend Developer" jobdes="work with our designers to improve usability for our customers and optimize web design for mobile and other platforms for maximum speed."/>
     <Card photo={pic3} name="Sachin" designation="Senior Frontend Developer" jobdes="work with our designers to improve usability for our customers and optimize web design for mobile and other platforms for maximum speed."/>
     
    </div>
  );
}

export default App;

import React from "react";
import './App.css';
import pict from "./alien.png";

class MyComponent extends React.Component{
  render(){
    return(
      <h2>
          Hello, my name is {this.props.name} I'm {this.props.age} years old.
      </h2>
      )
    }
}
  
function App() {
  return (
    <div className="App">
      <header>
        <img src={pict} className='pict' alt='picture'/>
        <MyComponent name='Kate'age='37'/>
        <p className="hello">
          Hello world!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

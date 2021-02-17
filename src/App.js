import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: "34" },
      { name: "Reema", age: "25" },
      { name: "Reshma", age: "28" }
    ],
    otherstate: "Some Other State"
  }

  switchNameHandler = (newname) => {
    this.setState({
      persons: [
        { name: newname, age: "34" },
        { name: "Reema", age: "25" },
        { name: "Reshma", age: "27" }
      ]
 })

  }
  


  nameChangedHandler =(event)=>{
    this.setState({
   persons:[
        { name: "Max", age: 34 },
        { name: event.target.value , age: "25" },
        { name: "Reshma", age: "27" }
]
    })


  }

  render() {
    const style={
    backgroundColor:'pink',
    font:'inherit',
    border: '1x solid blue',
    padding:'8px',
    cursor:'pointer'

    };
    return (
      <div className="App">
        <div>
          <h1>I am new to this page.</h1>
          <p>
            This is a react page
        </p>
          <button 
          className="button"
          onClick={() => this.switchNameHandler('Mxilmillian')}>Switch Button</button>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this,"maxima")}
            changed ={this.nameChangedHandler}>My Hobbies are: Tennis</Person>
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        </div>
      </div>
    );

  }
}


  export default App;

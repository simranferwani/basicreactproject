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
    otherstate: "Some Other State",
    showPersons: false
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


  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow
    });



  }


  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 34 },
        { name: event.target.value, age: "25" },
        { name: "Reshma", age: "27" }
      ]
    })


  }

  render() {
    const style = {
      backgroundColor: 'pink',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px',
      cursor: 'pointer'

    };

    let persons =null;

    if(this.state.showPersons){
    persons=(
      <div>
      {this.state.persons.map(persons => {
        return <Person 
        name={persons.name}
        age={persons.age}/>
      })}
      
    </div> 

    );}
    return (
      <div className="App">
        <div>
          <h1>I am new to this page.</h1>
          <p>
            This is a react page
        </p>
          <button
            className="button"
            onClick={this.togglePersonHandler}>Toggle Persons</button>
         {persons}
        </div>
      </div>
    );

  }
}


export default App;

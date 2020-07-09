import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';



class App extends Component {
  state = {
    persons: [
      { id: 'asdasd', name: 'Max', age: 28 },
      { id: 'qweqwe', name: 'Manu', age: 29 },
      { id: 'zxczxc', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false 
  };
  
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked!');
  //   // DON'T DO THIS: this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: 'Manu', age: 29 },
  //       { name: 'Stephanie', age: 27 }
  //     ]
  //   });
  // };
  
  changeNameHandler = (event, id ) => {
    const personIndex = this.state.persons.findIndex(p => { 
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex]= person;

    this.setState( {persons: persons} );
  }

  deleteNameHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  toggleNameHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow});
  }

  render() {
    console.log(this.state.persons.length)
    const style = {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid black',
      padding: '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    let persons = null;

    if( this.state.showPersons ){
      persons= (
      //list
      <div>  
        {this.state.persons.map((person,index) => {
          return <Person 
          name={person.name} 
          age={person.age} 
          key={person.id}
          changed={(event) => this.changeNameHandler(event, person.id)}
          click={() => this.deleteNameHandler(index)}/>
        })}
      </div> 
      );
      style.backgroundColor = 'red';

      style[':hover'] = {
        backgroundColor : 'salmon',
        color : 'green'
      };
    }
    let classes = [];
    if (this.state.persons.length >= 2 ){
      classes.push('red');
    }
    if (this.state.persons.length >= 1 ){
      classes.push('bold');
    }
    // console.log(classes);

    
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={classes.join(' ')}>This is my demo project!</p>
        <button 
          style={style}
          onClick={this.toggleNameHandler}>
            Toggle Persons
        </button>
        {persons}
      </div>
      </StyleRoot>
    );
      
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}



export default Radium(App);

import React from 'react';
import './Person.css';
import Radium from 'radium';

const person = (props) => {
    const style = {
        '@media (min-width: 500px)': {
            width: '450px',
        }
    }
    return( 
    <div className="Person" style={style}>
        <p onClick={props.click}>Hi, I'm {props.name}, I'm {props.age} years old !</p>
        <p>{props.children}</p>
        <input type="text" onChange={props.changed} value={props.name} />
        
    </div>    
    
    )
}

export default Radium(person);
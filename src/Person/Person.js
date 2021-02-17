import React from 'react';
import  "./Person.css" ;

const Person =(props) => {
    return (
    <div className="Person">
    <p onClick={props.click}>This is a {props.name} and my age is {props.age}</p>
     <p>{props.children}</p>
     <input type="text"  onChange={props.changed} value={props.name}/>
    </div>
    );

}

export default Person;
import React from 'react';
import Person from './Person';

function NameList() {

    const persons = [
      {
        id : 1,
        name : "Abdulhadi",
        age : 15,
        skills : "React"
      },

      {
        id : 2,
        name : "AHUSA",
        age : 12,
        skills : "UI/UX"
      },

      {
        id : 3,
        name : "Allahnana",
        age : 23,
        skills : "VUE"
      },

      {
        id : 4,
        name : "JIM",
        age : 32,
        skills : "SQL"
      },


    ]

    const personList =   persons.map(person =>(<Person key = {person.id}  person= {person}/>

    ) )
  return <div>{personList}
  
  </div>;
}

//List Component is responsible for rendering the list

export default NameList;

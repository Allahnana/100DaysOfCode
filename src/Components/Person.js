import React from 'react';

function Person({person}) {
  return <div>

          <h2>I am {person.name}. I am {person.age} years old. I know {person.skills}.</h2>
  </div>;
}

//the person component is responsible for rendering the person HTML

export default Person;

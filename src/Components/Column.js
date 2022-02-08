import React from 'react';

function Column() {
  return (

    //Using the opening and closing tag is a short form of React.Fragment. The disadvantage of using it is that you cannot add a key attribute to it.
   <>
      <td>Name</td>
      <td>Allahnana</td>
  </>
  )
}

export default Column;

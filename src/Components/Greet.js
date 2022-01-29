
import React from 'react';

const Greet = (props) =>{
  const  {name, lastName} = props
    // console.log('props')

   return(
     <div>
          <h1>Hello!!! {name}   {lastName}</h1>
      {/* {props.children} */}
     </div>
   ) 

} 


export default Greet;
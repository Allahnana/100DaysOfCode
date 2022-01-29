import React, { Component } from 'react';


class Welcome extends Component {
     render (){
         return <h1>Welcome   {this.props.name} {this.props.lastName}</h1>

         //Destructured
        //  const {name, lastName} = this.props
        //  return <h1>Welcome   {name} {lastName}</h1>
     }
     
}

//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


export default Welcome;
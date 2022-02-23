import React, { Component } from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'

export class ComponentE extends Component {

    static contextType = UserContext

  render() {
    return (    
      <div>

        <h1>I say make i make small commit wit doings since twitter don lock my account, na tycoon teach me sha</h1>
           Component E context {this.context}
          <ComponentF/>
      </div>
    )
  }
}

// ComponentE.contextType = UserContext


export default ComponentE
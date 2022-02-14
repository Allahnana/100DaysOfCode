import React, { Component } from 'react'
import FRIref from './FRIref'

class ParentFRIref extends Component {

    constructor(props) {
      super(props)
    
     this.inputRef = React.createRef()
    }


    clickHandler = () => {
        this.inputRef.current.focus()
    }
    
  render() {
    return (
      <div>
          <FRIref  ref = {this.inputRef}/>

          <button onClick={this.clickHandler}> Focus Input</button>
      </div>
    )
  }
}

export default ParentFRIref
import React, { Component } from 'react'

class ClickCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 04
      }
    }
  render() {
    return (
      <div>

          <button>CLick X times</button>
      </div>
    )
  }
}

export default ClickCounter
import React, { Component } from 'react'

class ClickCounter extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 04
      }
    }

    increamentCount = () => {
        this.setState(prevState => {
            return {count: prevState.count +1}
        } )
    }
  render() {
    const {count} = this.state
    return (

       
      <div>

          <button onClick={this.increamentCount}>CLick {count} times</button>
      </div>
    )
  }
}

export default ClickCounter
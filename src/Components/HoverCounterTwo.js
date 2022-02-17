import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  
  render() {

    const {count} = this.state
    return (
      <h2 onMouseOver={this.increamentCount}>Hovered {count} Times</h2>
    )
  }
}

export default HoverCounterTwo
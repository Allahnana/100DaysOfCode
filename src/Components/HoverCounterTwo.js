import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  
  render() {

    const {count, increamentCount} = this.props
    return (
      <h2 onMouseOver={increamentCount}>Hovered {count} Times</h2>
    )
  }
}

export default HoverCounterTwo
import React, { Component } from 'react'

export class ClickCounterTwo extends Component {

    // constructor(props) {
    //   super(props)
    
    //   this.state = {
    //      count : 0
    //   }
    // }

    // increamentCount = () => {
    //     this.setState(prevState =>{
    //         return {count: prevState.count + 1}
    //     })
    // }
  render() {
    const {count, increamentCount} = this.props
    return (
      <button onClick={increamentCount}>CLicked {count} Times</button>
    )
  }
}

export default ClickCounterTwo
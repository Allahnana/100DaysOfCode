import React, { Component } from 'react';

class LifecycleB extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Allahnana'
      }
      console.log('LifecycleB Constructor')
    }



    static getDerivedStateFromProps(state, props){

        console.log('LifecycleB getDerivedStateFromProps')

        return null
    }



    componentDidMount(){
        console.log('LifecycleB ComponentDidMount')
    }



    
  render() {
      console.log('LifecycleB Render')
    return  <div>LifecycleB</div>
  }
}

export default LifecycleB;

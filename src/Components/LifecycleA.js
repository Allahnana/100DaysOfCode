import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

class LifecycleA extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Allahnana'
      }
      console.log('LifecycleA Constructor')
    }



    static getDerivedStateFromProps(state, props){

        console.log('LifecycleA getDerivedStateFromProps')

        return null
    }



    componentDidMount(){
        console.log('LifecycleA ComponentDidMount')
    }



    
  render() {
      console.log('LifecycleA Render')
    return (

        <div>
             <div>LifecycleA</div>;

             <LifecycleB/>

        </div>
    )
  }
}

export default LifecycleA;

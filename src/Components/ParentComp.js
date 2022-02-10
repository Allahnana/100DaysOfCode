import React, { Component } from 'react';
import MemoComp from './MemoComp';
import PureComp from './PureComp';
import RegComp from './RegComp';

class ParentComp extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         name : 'Allahnana'
      }
    }

    componentDidMount(){

      
        setInterval(() => {
            this.setState({
                name: 'Allahnana'
            })  
        }, 2000)
    }
    
  render() {
      console.log('************* Parent Component Render ********************')
    return <div> 
        
        Parent Component

        <MemoComp name = {this.state.name}></MemoComp>
{/* 
        <RegComp name = {this.state.name}></RegComp>
        <PureComp name = {this.state.name}></PureComp> */}

    </div>;
  }
}

export default ParentComp;

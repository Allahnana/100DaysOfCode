// import React, { Component } from 'react'

// class Counter extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//             count: 0
             
//         }
//     }

//     increament(){
//         // this.setState({ 
//         //     count: this.state.count + 1
//         // }, ()=>{
//         //     //Asynchronous console log statement
//         //     console.log('Calback value', this.state.count)
//         // })
//         // //Synchronous console log statement

//         this.setState((prevState, props) =>({
//             count: prevState.count + 1
//         }))
//         console.log(this.state.count)
            
//     }

//     increamentFive(){
//         this.increament()
//         this.increament()
//         this.increament()
//         this.increament()
//         this.increament()
//     }
    
//     render() {
//         return (
//             <div>
//                 <div>Count - {this.state.count}</div>
//                 <button onClick= {() => this.increamentFive()}>Increament</button>
//             </div>
//         )
//     }
// }

// export default Counter

// import React, { Component } from 'react'

// class EventBind extends Component {

//     constructor(props) {
//         super(props)
    
//         this.state = {
//              message: "Hello"
//         }

//          //binding in the class constructor
//         // this.clickHandler = this.clickHandler.bind(this)
//     }

//     // clickHandler(){

//     //     this.setState({
//     //         message: "GoodBye!!!"
//     //     })
//     //     console.log(this)

//     // }

//     //binding as a class property with arrow function
//   clickHandler = () => {
//       this.setState({
//           message: "GoodBye!!!"
//       })
//   }
    
//     render() {
//         return (
//             //binding in the render method
//             <div>
//                 <div>{this.state.message}</div>
                
//                 {/* using the bind keyword */}
//                 {/* <button onClick = {this.clickHandler.bind(this)}>Click Me</button> */}

//                   {/* using the fat arrow function */}
//                 {/* <button onClick = {() => this.clickHandler()}>Click Me</button> */}

//                 <button onClick = {this.clickHandler}>Click Me</button>
     
     

//             </div>

//         )
//     }
// }

// export default EventBind

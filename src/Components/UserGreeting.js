import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {

        //CONDITIONAL RENDERING USING IF ELSE

    //     if(this.state.isLoggedin){
    //        return <div>Welcome Abdul</div>

    //     }else{
    //        return <div>Goodbye Abdul</div>
    //     }

        //CONDITIONAL RENDERING USING VARIABLE DECLARATION

        // let message

        // if (this.state.isLoggedin){
        //    message = <div>Welcome Abdul</div>
        // } else {
        //     message = <div>Goodbye Abdul</div>   
        // }

        // return <div>{message}</div>


         //CONDITIONAL RENDERING USING TENARY OPERATORS
       
        // return   this.state.isLoggedin ?(
        // <div>Welcome Abdul</div> ):(

        // <div>Goodbye Abdul</div> )


        //CONDITIONAL RENDERING USING SHORT CIRCUIT

        return this.state.isLoggedin && <div>Welcome Abdul</div>


        
        


    }
}


//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



export default UserGreeting

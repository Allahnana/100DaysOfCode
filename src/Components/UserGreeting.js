import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedin: true
        }
    }
    
    render() {

        if(this.state.isLoggedin){
           return <div>Welcome AHUSA</div>

        }else{
           return <div>Welcome Allahnana</div>
        }

        return (
            <div>
                {/* Welcome Dev_Allahnana */}
            </div>
        )
    }
}


//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



export default UserGreeting

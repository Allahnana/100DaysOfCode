import React, { Component } from 'react';

class Form extends Component {

   
 
    constructor(props) {
      super(props)
    //Component state that controls the value of the input element.
      this.state = {
         username : "",
         Comments : "",
         topic : "react"
      }
    }

    //Handling even changes

    handleUserNameChange = (event) => {

        this.setState({
            username : event.target.value
        })

    }

    handleCommentsChange = event => {
        this.setState({
            Comments : event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic : event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.Comments} ${this.state.topic}`  )
        event.preventDefault()
    }
    
  render() {

    const { username, Comments, topic} = this.state

    
    return <form onSubmit={this.handleSubmit}>

        <div>
            <label>UserName</label>
            <input type='text' value={username} onChange = {this.handleUserNameChange}/>
        </div>

        <div>

            <label>Comments</label>
            <textarea value={Comments}  onChange = {this.handleCommentsChange}></textarea>
        </div>

        <div>

            <label>Topic</label>
            <select value={topic} onChange = {this.handleTopicChange}>
                <option value= "react">React</option>
                <option value= "angular">Angular</option>
                <option value= "vue">VUE</option>
            </select>
        </div>

        <button type='submit'>Submit</button>
    </form>
  }
}

export default Form;

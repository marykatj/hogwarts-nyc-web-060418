import React, { Component } from 'react'

class Form extends Component {


state = {
  description: ""
}

formChange = (event) => {
  this.setState({
  [event.target.id]: event.target.value
})
}

formSubmit = (event) => {
  event.preventDefault();
  this.props.onSubmit(event, this.state.description)
  this.setState({
    description: ""
  })
}

      render() {
        return (
          <div id="form">
            <h4>Lets Meat Here</h4>
            <form onSubmit={this.formSubmit}>
              <input
                type="text"
                id="description"
                placeholder="Insert Meat Here"
                value={this.state.description}
                onChange={this.formChange}
               />
               <button
                 value="Submit"
                 >Submit</button>
            </form>
          </div>
        )
      }

}

export default Form;

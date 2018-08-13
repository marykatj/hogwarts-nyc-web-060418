import React, { Component } from 'react'
import Form from './Form'
import MeatContainer from './MeatContainer'
import '../App.css'

const meatAPI = `https://baconipsum.com/api/?type=meat-and-filler`

class App extends Component {

  state = {
    meat: []
  }

  componentDidMount() {
    fetch(meatAPI).then(response => response.json()).then(data => this.setState({
      meat: data
    }));
  }

submitForm = (event, newMeat) => {
  event.preventDefault();
  let newMeatArray = [...this.state.meat]
  newMeatArray.push(newMeat)
  this.setState({
    meat: newMeatArray
  })
}


  render() {
    return(
      <div>
        <Form meats={this.state.meat} onSubmit={this.submitForm}/>
        <MeatContainer meats={this.state.meat}/>
      </div>
    )
  }
}



export default App;

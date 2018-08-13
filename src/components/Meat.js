import React, { Component } from 'react'

class Meat extends Component {

  render() {
    return(
      <div className ="dogTile">
        <h5> {this.props.meat} </h5>
      </div>
    )
  }

}

export default Meat;

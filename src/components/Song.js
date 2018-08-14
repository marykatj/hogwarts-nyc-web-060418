import React, { Component } from 'react'
import EditForm from './EditForm'

class Song extends Component {

  render() {
    return(
      <div className ="songTile">
        <h5> Title </h5>
        <h5> Artist </h5>
        <button> Edit </button>
        <p></p>
      </div>
    )
  }


}

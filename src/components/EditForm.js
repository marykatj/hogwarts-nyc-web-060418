import React, { Component } from 'react'

class EditForm extends Component {

  render() {
    return (
      <div>
        <form id="editForm" >
          <textArea cols="100" rows="5" type="text" id="editDescription" ></textArea>
           <button value="Submit"> Submit </button>
           <button value="Hide"> Hide </button>
        </form>
      </div>
    )
  }


}

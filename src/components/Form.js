import React, { Component } from 'react'

class Form extends Component {

      render() {
        return (
          <div id="form">
            <h4>Add Songs Here</h4>
            <form>
              <input type="text" id="song" placeholder="Insert Song Here"/>
              <input type="text" id="artist" placeholder="Insert Artist Here"/>
              <textArea cols="100" rows="5" type="text" id="lyrics" placeholder="Insert Lyrics Here" ></textArea>
               <button value="Submit"> Submit </button>
            </form>
            <button> Sort! </button>
          </div>
        )
      }

}

export default Form;

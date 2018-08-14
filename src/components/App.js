//Deliverables:

// 1. Get API to render, with song Title & Artist.  When I click a tile, make the lyrics show.
// 2. When I click an edit button, have Edit form appear to edit Song
// 3. Get a search bar, to detect songs by artist.  When i click the sort button, the songs should sort based on alphabetical order
// 4. Be able to create a new song

import React, { Component } from 'react'
import SongContainer from './SongContainer'
import Form from './Form'
import Filter from './Filter'
import '../App.css'

const songURL = `http://localhost:4000/users/11/songs`

class App extends Component {

  render() {
    return (
      <div>
        <Filter />
        <Form />
        <SongContainer />
      </div>
    )
  }

}



export default App;






//MK NOTES: sort, comment, update, delete
//boolean greased vs non-greased, and toggle the state
//default props

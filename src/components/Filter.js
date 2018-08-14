import React, { Component } from 'react'

class Filter extends Component {

  render() {
    return(
      <div>
        <input type="text" placeholder="Find Artists..." value={this.props.search}/>
      </div>
    )
  }

}

export default Filter

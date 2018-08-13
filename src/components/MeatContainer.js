import React, { Component } from 'react'
import Meat from './Meat'

class MeatContainer extends Component {

meatMapper = () => {
  return this.props.meats.map(meat => <Meat key={meat} meat={meat}/>)
}

  render() {
    return (
        <div>
        {this.meatMapper()}
        </div>
    )
  }

}

export default MeatContainer;

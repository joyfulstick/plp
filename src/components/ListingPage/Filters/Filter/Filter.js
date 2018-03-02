import React, { Component } from 'react'
import './Filter.css'

class Filter extends Component {
  state = {
    selected: false,
  }

  handleSelect = e => {
    e.target.selected = this.state.selected
    this.setState(prevState => {
      return {
        selected: !prevState.selected,
      }
    })
  }

  render() {
    return (
      <ul className="list">
        <li
          selected={this.state.selected}
          className={
            this.state.selected
              ? "list__item list__item--selected"
              : "list__item"
          }
          onMouseDown={this.handleSelect}
          onMouseUp={this.props.onMouseUp}>
          {this.props.children}
        </li>
      </ul>
    )
  }
}

export default Filter

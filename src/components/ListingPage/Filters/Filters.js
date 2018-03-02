import React from 'react'
import Filter from './Filter/Filter'
import { connect } from 'react-redux'
import * as definitions from '../../../data/definitions'
import './Filters.css'

const Filters = props => (
  <section className="filters">
    {Object.entries(definitions).map(([drop, options]) => (
      <ul key={drop} className="filters__dropdawn">
        <li>{drop}</li>
        {
          options.map(option => (
            <Filter key={option} onMouseUp={props.onSelect}>{option}</Filter>
          ))
        }
      </ul>)
    )}
  </section>
)

const mapDispatchToProps = dispatch => {
  return {
    onSelect: e => dispatch({
      type: 'SELECT', payload: {
        selected: e.target.selected, value: e.target.innerHTML
      }
    }),
  }
}

export default connect(null, mapDispatchToProps)(Filters)

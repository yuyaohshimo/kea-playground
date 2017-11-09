import React from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'

@kea({
  path: () => ["kea"],

  actions: () => ({
    increment: amount => ({ amount }),
    decrement: amount => ({ amount })
  }),

  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => state + payload.amount,
        [actions.decrement]: (state, payload) => state - payload.amount
      }
    ]
  }),

  selectors: ({ selectors }) => ({
    doubleCounter: [
      () => [selectors.counter],
      counter => counter * 2,
      PropTypes.number
    ]
  }),

})
class Counter extends React.Component {
  render() {
    return (
      <div>
        <span>{this.props.doubleCounter}</span>
        <button onClick={() => this.actions.increment(10)}>Increment</button>
      </div>
    )
  }
}

export default Counter;

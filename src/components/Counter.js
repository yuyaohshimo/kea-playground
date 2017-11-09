import React from 'react'
import PropTypes from 'prop-types'
import { kea } from 'kea'
import { take, put, call } from "redux-saga/effects";

@kea({
  path: () => ["kea"],

  actions: () => ({
    increment: amount => ({ amount }),
    decrement: amount => ({ amount }),
    setName: name => ({ name })
  }),

  reducers: ({ actions }) => ({
    counter: [
      0,
      PropTypes.number,
      {
        [actions.increment]: (state, payload) => state + payload.amount,
        [actions.decrement]: (state, payload) => state - payload.amount
      }
    ],
    user: [
      '',
      PropTypes.string,
      {
        [actions.setName]: (state, payload) => payload.name
      }
    ]
  }),

  selectors: ({ selectors }) => ({
    doubleCounter: [
      () => [selectors.counter],
      counter => counter * 2,
      PropTypes.number
    ],
    counter: [
      () => [selectors.counter],
      counter => counter,
      PropTypes.number
    ],
    name: [
      () => [selectors.user],
      user => user,
      PropTypes.string
    ]
  }),

  start: function * () {
    console.log('Starting counter saga')
    const { increment } = this.actions;

    while (true) {
      const foo = yield take(action => action.type === increment.toString())
      if (foo) {
        console.log('Put side-effect')
        yield put(increment(100))
      }
    }
  },

  stop: function * () {
    console.log('Stopping counter saga')
  },

  takeEvery: ({ actions, workers }) => ({
    [actions.increment]: workers.increment
  }),

  takeLates: ({ actions, workers }) => ({
    [actions.increment]: workers.increment
  }),

  workers: {
    increment: function * (action) {
      console.log('worker increment')
      const { setName } = this.actions;
      yield put(setName('Taro'))
    }
  }

})
class Counter extends React.Component {
  render() {
    console.log('this')
    return (
      <div>
        <span>user:{this.props.name}</span>
        <span>{this.props.counter}</span>
        <button onClick={() => this.actions.increment(10)}>Increment</button>
      </div>
    )
  }
}

export default Counter;

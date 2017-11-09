import { createStore, applyMiddleware, compose } from "redux";
import { browserHistory } from "react-router";
import { syncHistoryWithStore, routerMiddleware } from "react-router-redux";
import createSagaMiddleware from "redux-saga";
import freeze from "redux-freeze";
import { reducers } from "./reducers/index";
import sagaPlugin, { keaSaga } from 'kea-saga'
import { activatePlugin } from 'kea'

// add the middlewares
let middlewares = [];

// add the router middleware
middlewares.push(routerMiddleware(browserHistory));

// add kea-saga middleware
activatePlugin(sagaPlugin)
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)

// add the freeze dev middleware
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(freeze);
}

// apply the middleware
let middleware = applyMiddleware(...middlewares);

// add the redux dev tools
if (process.env.NODE_ENV !== 'production' && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension());
}

// create the store
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

sagaMiddleware.run(keaSaga)

// export
export { store, history };

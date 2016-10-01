import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from '../reducers'
import { fetchProducts, fetchOrders } from '../actions'

let logger = createLogger()
let store = createStore(reducers, applyMiddleware(
  logger,
  thunk
))

store.dispatch(fetchProducts())
store.dispatch(fetchOrders())

export default store

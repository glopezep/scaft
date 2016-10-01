import { combineReducers } from 'redux'
import { SET_VISIBILITY_FILTER, SELECT_PRODUCT, CHECKOUT_ORDER, REQUEST_PRODUCTS_SUCCESS, REQUEST_ORDERS_SUCCESS } from '../actions'

let orderState = {
  id: 1,
  products: []
}

function currentOrder (state = orderState, { type, payload }) {
  switch (type) {
  case SELECT_PRODUCT:
    return [
      ...state.products, payload.product
    ]
  case CHECKOUT_ORDER:
    return Object.assign({}, state, {
      products: [...state.products]
    })
  default:
    return state
  }
}

function visibilityFilter (state='SHOW_DRINKS', { type, payload }) {
  switch (type) {
  case SET_VISIBILITY_FILTER:
    return payload.filter
  default:
    return state
  }
}

function orders (state = [], action) {
  switch (action.type) {
  case REQUEST_ORDERS_SUCCESS:
    return [
      ...state, ...action.payload.orders
    ]
  default:
    return state
  }
}

function products (state = [], action) {
  switch (action.type) {
  case REQUEST_PRODUCTS_SUCCESS:
    return [
      ...state, ...action.payload.products
    ]
  default:
    return state
  }
}

export default combineReducers({
  currentOrder,
  orders,
  products,
  visibilityFilter
})

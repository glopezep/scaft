import fetch from 'isomorphic-fetch'

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

export const SELECT_PRODUCT = 'SELECT_PRODUCT'
export const REMOVE_PRODUCT = 'REMOVE_PRODUCT'

export const CHECKOUT_ORDER = 'CHECKOUT_ORDER'
export const COMPLETE_ORDER = 'COMPLETE_ORDER'

export const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
export const REQUEST_PRODUCTS_SUCCESS = 'REQUEST_PRODUCTS_SUCCESS'
export const REQUEST_PRODUCTS_FAILURE = 'REQUEST_PRODUCTS_FAILURE'

export const REQUEST_ORDERS = 'REQUEST_ORDERS'
export const REQUEST_ORDERS_SUCCESS = 'REQUEST_ORDERS_SUCCESS'
export const REQUEST_ORDERS_FAILURE = 'REQUEST_ORDERS_FAILURE'

export function setVisibilityFilter (filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    payload: { filter }
  }
}

export function selectProduct (product) {
  return {
    type: SELECT_PRODUCT,
    payload: { product }
  }
}

export function removeProduct (product) {
  return {
    type: REMOVE_PRODUCT,
    payload: { product }
  }
}

export function checkoutOrder () {
  return {
    type: CHECKOUT_ORDER
  }
}

export function completeOrder () {
  return {
    type: COMPLETE_ORDER
  }
}

export function requestProducts () {
  return {
    type: REQUEST_PRODUCTS
  }
}

export function requestProductsSuccess (products) {
  return {
    type: REQUEST_PRODUCTS_SUCCESS,
    payload: { products }
  }
}

export function requestProductsFailure (err) {
  return {
    type: REQUEST_PRODUCTS_FAILURE,
    payload: { err }
  }
}

export function requestOrders () {
  return {
    type: REQUEST_ORDERS
  }
}

export function requestOrdersSuccess (orders) {
  return {
    type: REQUEST_ORDERS_SUCCESS,
    payload: { orders }
  }
}

export function requestOrdersFailure (err) {
  return {
    type: REQUEST_ORDERS_FAILURE,
    payload: { err }
  }
}

export function fetchProducts () {
  return async dispatch => {
    try {
      dispatch(requestProducts())
      let response = await fetch('/api/products')
      let items = await response.json()
      dispatch(requestProductsSuccess(items))
    } catch (e) {
      dispatch(requestProductsFailure(e))
    }
  }
}

export function fetchOrders () {
  return async dispatch => {
    try {
      dispatch(requestOrders())
      let response = await fetch('/api/orders')
      let orders = await response.json()
      dispatch(requestOrdersSuccess(orders))
    } catch (e) {
      dispatch(requestOrdersFailure(e))
    }
  }
}

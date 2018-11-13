import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

const InitialState = {
  fetching: false,
  products: [],
  attributes: [],
}

export const actionTypes = {
  FETCH_PRODUCT: 'FETCH_PRODUCT',
  ADD_PRODUCT: 'ADD_PRODUCT',
  FETCH_ATTRIBUTES: 'FETCH_ATTRIBUTES',
  ADD_ATTRIBUTES: 'ADD_ATTRIBUTES'
}

// REDUCERS
export const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PRODUCT:
    case actionTypes.FETCH_ATTRIBUTES:
      return Object.assign({}, state, {
        fetching: true,
      })
    case actionTypes.ADD_PRODUCT:
      return Object.assign({}, state, {
        products: state.products.concat(action.payload)
      })
    case actionTypes.ADD_ATTRIBUTES:
      return Object.assign({}, state, {
        attributes: !Array.isArray(action.payload) ? [
          ...state.attributes, action.payload
        ] : action.payload
      })
    default: return state
  }
}

// ACTIONS
export const addProduct = (products) => dispatch => {
  return dispatch({ type: actionTypes.ADD_PRODUCT, payload: products })
}

export const addAttribute = (attributes) => dispatch => {
    return dispatch({ type: actionTypes.ADD_ATTRIBUTES, payload: attributes })
}

export const fetching = dispatch => {
    return dispatch({ type: actionTypes.FETCH_PRODUCT })
}

/**
* @param {object} initialState
* @param {boolean} options.isServer indicates whether it is a server side or client side
* @param {Request} options.req NodeJS Request object (not set when client applies initialState from server)
* @param {Request} options.res NodeJS Request object (not set when client applies initialState from server)
* @param {boolean} options.debug User-defined debug mode param
* @param {string} options.storeKey This key will be used to preserve store in global namespace for safe HMR 
*/
export function initializeStore (initialState = InitialState) {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}
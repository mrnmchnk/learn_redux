const deafaultState = {
  cash: 0,
}

export const ADD_CASH = 'ADD_CASH'
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH'
export const GET_CASH = 'GET_CASH'
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH'

export const cashReducer = (state = deafaultState, action) => {
  switch(action.type) {
    case ADD_CASH:
      return {...state, cash: state.cash + 1}
    case GET_CASH:
      return {...state, cash: state.cash - 1}
    default:
      return state
  }
}


export const addCashAction = () => ({type: ADD_CASH})
export const addAsyncCashAction = () => ({type: ASYNC_ADD_CASH})
export const getCashAction = () => ({type: GET_CASH})
export const getAsyncCashAction = () => ({type: ASYNC_GET_CASH})
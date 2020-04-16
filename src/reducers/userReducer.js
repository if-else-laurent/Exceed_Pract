import { FETCH_USERS, DELETE_USER, ADD_USER } from '../actions/types'

const initialState = {
  users: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload
      }
    case DELETE_USER:
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.payload)
      }
    case ADD_USER:
      return {
        ...state,
        users: [action.payload, ...state.users]
      }
    default:
      return state;
  }
} 
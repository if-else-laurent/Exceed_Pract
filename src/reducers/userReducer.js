import {
  FETCH_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_FETCH_USERS,
  ERROR_LOAD_FETCH_USERS,
  FILTER_SEARCH_USER,
} from '../actions/types'

const initialState = {
  users: [],
  filtredUsers: [],
  loading: true,
  error: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case BEGIN_LOAD_FETCH_USERS:
      return {
        ...state,
        loading: true,
      }
    case FETCH_USERS:
      return {
        ...state,
        users: action.payload,
        filtredUsers: action.payload,
        loading: false,
        error: false,
      }
    case ERROR_LOAD_FETCH_USERS:
      console.log('Error load users')
      return {
        ...state,
        loading: false,
        error: action.payload,
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
    case FILTER_SEARCH_USER:
      console.log(state.filtredUsers)
      return {
        ...state,
        filtredUsers: state.users.filter((user) => user.name.toLowerCase().includes(action.payload.toLowerCase().trim()))
      }
    default:
      return state;
  }
} 
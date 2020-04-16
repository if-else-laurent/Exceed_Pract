import {
  FETCH_USERS,
  DELETE_USER,
  ADD_USER,
  BEGIN_LOAD_FETCH_USERS,
  ERROR_LOAD_FETCH_USERS,
  FILTER_SEARCH_USER,
} from './types'

// export const fetchUsers = () => (dispatch) => {
//   console.log('fetch')
//   fetch(`https://jsonplaceholder.typicode.com/users`)
//     .then(res => res.json())
//     .then(res =>
//       dispatch({
//         type: FETCH_USERS,
//         payload: res
//       })
//     );
// };

// export function fetchUsers() {
//   return dispatch => {
//     dispatch({ type: BEGIN_LOAD_FETCH_USERS });
//     fetch(`https://jsonplaceholder.typicode.com/users`)
//       .then(res => res.json())
//       .then(res =>
//         dispatch({
//           type: FETCH_USERS,
//           payload: res
//         })
//       )
//       .catch(error => {
//         dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: error })  //?????????????
//       }
//       )
//   }
// };

export function fetchUsers() {
  return dispatch => {
    getData(dispatch);
  }
};


async function getData(dispatch) {
  try {
    dispatch({ type: BEGIN_LOAD_FETCH_USERS });
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const users = await res.json();
    dispatch({
      type: FETCH_USERS,
      payload: users
    });
  }
  catch (err) {
    dispatch({ type: ERROR_LOAD_FETCH_USERS, payload: err });
  }
}


export const deleteUser = (id) => {
  return {
    type: DELETE_USER,
    payload: id,
  }
}

export const addUser = (newUser) => {
  console.log(newUser)
  return {
    type: ADD_USER,
    payload: newUser,
  }
}

export const searchUser = (resSearch) => {
  return {
    type: FILTER_SEARCH_USER,
    payload: resSearch,
  }
}
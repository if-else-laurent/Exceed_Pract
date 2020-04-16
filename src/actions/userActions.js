import { FETCH_USERS, DELETE_USER, ADD_USER, BEGIN_LOAD_FETCH_USERS, ERROR_LOAD_FETCH_USERS } from './types'

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
    dispatch({ type: BEGIN_LOAD_FETCH_USERS });
    getData(dispatch);
  }
};


async function getData(dispatch) {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const result = await res.json();
    dispatch({
      type: FETCH_USERS,
      payload: result
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
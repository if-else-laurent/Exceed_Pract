import React from 'react';
import { Route } from 'react-router-dom';
import SearchUser from '../searchUser/SearchUser';
import UserCard from '../userCard/UserCard';
import NotFound from '../notFound/NotFound';
import AddUser from '../addUser/AddUser';

const UserList = (props) => {
  const {
    users,
    filtredUsers,
    setResSearch,
    deleteUser,
    addUser,
  } = props;
  return (
    <div className='user__list'>
      <Route exact path='/'>
        <SearchUser setResSearch={setResSearch} />
        <AddUser addUser={addUser} />
        {users ? (
          filtredUsers.length ? (
            filtredUsers.map((user) => <UserCard key={user.id} deleteUser={deleteUser} user={user} />)
          ) : (<NotFound />)
        ) : (<p> Loading... </p>)}
      </Route>
    </div>
  )
}

export default UserList;

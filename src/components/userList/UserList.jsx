import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import SearchUser from '../searchUser/SearchUser';
import UserCard from '../userCard/UserCard';
import NotFound from '../notFound/NotFound';

const UserList = (props) => {
  // useEffect(() => {
  //   console.log('mounted');
  //   return () => {
  //     console.log('anmounted');
  //   }
  // }, []);
  const { users, filtredUsers, setResSearch, deleteUser } = props;
  return (
    <div className='user__list'>
      <Route exact path='/'>
        <SearchUser setResSearch={setResSearch} />
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

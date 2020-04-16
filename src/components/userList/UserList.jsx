import React, { useEffect } from 'react';
import SearchUser from '../searchUser/SearchUser';
import UserCard from '../userCard/UserCard';
import NotFound from '../notFound/NotFound';
import AddUser from '../addUser/AddUser';
import UserListStyle from './UserList.module.css';


const UserList = (props) => {
  const { users, filtredUsers, setResSearch } = props;

  return (
    <div>
      <SearchUser setResSearch={setResSearch} />
      <AddUser />
      <div className={UserListStyle.container}>
        {users ? (
          filtredUsers.length ? (
            filtredUsers.map((user) => <UserCard key={user.id} user={user} />)
          ) : (<NotFound />)
        ) : (<p> Loading... </p>)}
      </div>
    </div>
  )
}



export default UserList;

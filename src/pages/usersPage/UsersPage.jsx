import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  console.log('props', props);
  const {
    users,
    filtredUsers,
    setResSearch,
    deleteUser,
  } = props;


  return (
    <UserList users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} deleteUser={deleteUser} />
  )
}

export default UsersPage


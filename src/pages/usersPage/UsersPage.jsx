import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/userList/UserList';

const UsersPage = (props) => {
  const [users, setUsers] = useState([]);
  const [resSearch, setResSearch] = useState('');

  console.log('props', props);

  useEffect(() => {                                             // Разобраться с этим блоком
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('Result', res.data);
        setUsers(res.data);
      }
      )
  }, []);

  const deleteUser = (id) => { setUsers(users.filter(parametr => parametr.id !== id)) };  //Удаление пользователя
  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));  //Фильтрация поиска

  return (
    <UserList users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} deleteUser={deleteUser} />
  )
}

export default UsersPage


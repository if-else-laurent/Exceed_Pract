import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import UserPage from './components/userPage/UserPage';
import UserList from './components/userList/UserList';

const App = () => {
  const [users, setUsers] = useState([]);
  const [resSearch, setResSearch] = useState('');


  useEffect(() => {                                             // Разобраться с этим блоком
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('Result', res.data);
        setUsers(res.data);
      }
      )
  }, []);


  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));
  console.log(filtredUsers);
  return (
    <BrowserRouter>
      <div className='user__container'>
        <UserList users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} />
        <UserPage filtredUsers={filtredUsers} setResSearch={setResSearch} />
      </div>
    </BrowserRouter>
  )
}

export default App

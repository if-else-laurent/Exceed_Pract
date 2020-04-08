import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';
import RouteTest from './pages/testRoute/RouteTest';


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

  const deleteUser = (id) => setUsers(users.filter((parametr) => parametr.id !== id));  //Удаление пользователя
  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));  //Фильтрация поиска

  return (
    <Router>
      <div className='user__container'>
        <Route path='/' render={(props) => <UsersPage {...props} users={users} filtredUsers={filtredUsers} setResSearch={setResSearch} deleteUser={deleteUser} />} />
        <Route path='/:id' render={(props) => <UserPage {...props} filtredUsers={filtredUsers} setResSearch={setResSearch} />} />
        {/* <Route path='/:id' component={RouteTest} /> */}
      </div>
    </Router>
  )
}

export default App;

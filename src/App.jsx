import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/userCard/UserCard';
import SearchUser from './components/searchUser/SearchUser';

const App = () => {
  const [users, setUsers] = useState(null);
  const [resSearch, setResSearch] = useState('');


  useEffect(() => {                                             // Разобраться с этим блоком
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('Result', res.data);
        setUsers(res.data);
      }
      )
  }, []);


  console.log('users', users);
  return (
    <div>
      <SearchUser setResSearch={setResSearch} />
      {users ?
        (users.map(user => {
          if (resSearch == '') {
            return (
              <UserCard key={user.id} user={user} />
            )
          } else if ((user.name.toLowerCase()).includes(resSearch.toLowerCase())) {
            {/* Переводит в нижний регистр результат поиска и строку имени и проверяет включенность(без учета регистра) */ }
            return (
              <UserCard key={user.id} user={user} />
            )
          }
        }
        ))
        : <p> Loading... </p>}
    </div>
  )
}

export default App
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/userCard/UserCard';

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
      <div className='search'>
        <input type='text' onChange={(e) => setResSearch(e.target.value)} />
      </div>
      {users ?
        (users.map(user => {
          if (resSearch == '') {
            return (
              <UserCard key={user.id} user={user} />
            )
          } else if ((user.name).includes(resSearch)) {
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






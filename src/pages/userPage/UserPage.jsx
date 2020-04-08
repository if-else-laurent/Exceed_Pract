import React, { useEffect, useState } from 'react';
import axios from 'axios';
import About from '../../components/about/About'
import HeaderPage from '../../components/headerPage/HeaderPage';

const UserPage = (props) => {
  // const { filtredUsers, setResSearch } = props;
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

  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));  //Фильтрация поиска
  const userPage = filtredUsers.filter((user) => user.id == props.match.params.id);

  return (
    <div className='user__page'>

      {userPage.map((user) => {
        return (
          <div className='user__page__inner'>
            <HeaderPage avatar={user.avatar} name={user.name} username={user.username} email={user.email} setResSearch={setResSearch} />
            <About phone={user.phone} website={user.website} company={user.company} address={user.address} />
          </div>
        )
      })
      }
    </div>
  )
}

export default UserPage;
import React from 'react';
import { Route } from 'react-router-dom';
import About from '../about/About'
import HeaderPage from '../headerPage/HeaderPage';

const UserPage = (props) => {
  const { filtredUsers, setResSearch } = props;
  return (
    <div className='user__page'>
      {filtredUsers.map((user) => {
        return (
          <Route key={user.id} exact path={'/' + user.id}>
            <div className='user__page__inner'>
              <HeaderPage avatar={user.avatar} name={user.name} username={user.username} email={user.email} setResSearch={setResSearch} />
              <About phone={user.phone} website={user.website} company={user.company} address={user.address} />
            </div>
          </Route>
        )
      })
      }
    </div>
  )
}

export default UserPage;

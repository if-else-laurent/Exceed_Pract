import React from 'react';
import About from '../../components/about/About'
import HeaderPage from '../../components/headerPage/HeaderPage';

const UserPage = (props) => {
  const {
    filtredUsers,
    setResSearch,
    match,
  } = props;

  const userPage = filtredUsers.filter((user) => user.id == match.params.id);

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
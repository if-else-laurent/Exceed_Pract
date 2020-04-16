import React from 'react';
import About from '../../components/about/About'
import HeaderPage from '../../components/headerPage/HeaderPage';
import UserPageStyle from './UserPage.module.css';

const UserPage = (props) => {
  const {
    users,
    match,
  } = props;

  const userPage = users.filter((user) => user.id == match.params.id);

  return (
    <div className={UserPageStyle.container}>

      {userPage.map((user) => {
        return (
          <div key={user.id} className={UserPageStyle.inner}>
            <HeaderPage avatar={user.avatar} name={user.name} username={user.username} email={user.email} />
            <About phone={user.phone} website={user.website} company={user.company} address={user.address} />
          </div>
        )
      })
      }
    </div>
  )
}

export default UserPage;
import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import SearchUser from '../searchUser/SearchUser';
import UserCard from '../userCard/UserCard';
import NotFound from '../notFound/NotFound';
import AddUser from '../addUser/AddUser';

import { connect } from 'react-redux';
import { fetchUsers } from '../../actions/userActions';

const UserList = (props) => {
  const { users, fetchUsers } = props;

  console.log('user list props', props);

  useEffect(() => {                                             // Разобраться с этим блоком
    fetchUsers();
  }, []);

  return (
    <div className='user__list'>
      <h2>
        User page
      </h2>
      {/* <SearchUser setResSearch={setResSearch} />
        <AddUser addUser={addUser} /> */}
      {
        users ? (
          users.map((users) => <UserCard key={users.id} user={users} />)
        ) : (
            <p> Loading... </p>
          )
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  users: state.user.users
})

const mapActions = { fetchUsers };

export default connect(mapStateToProps, mapActions)(UserList);

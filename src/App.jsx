import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';

import { connect } from 'react-redux';
import { fetchUsers, } from '../src/actions/userActions';



const App = (props) => {
  const { users, fetchUsers, loading } = props;

  useEffect(() => {                                             // Разобраться с этим блоком
    fetchUsers();
  }, []);
  console.log(loading)

  const [resSearch, setResSearch] = useState('');

  const filtredUsers = users.filter((user) => user.name.toLowerCase().includes(resSearch.toLowerCase().trim()));  //Фильтрация поиска

  return (
    <Router>
      <div className='mainPage'>
        <Route exact path='/' render={(props) => <UsersPage {...props} setResSearch={setResSearch} users={users} filtredUsers={filtredUsers} />} />
        <Route exact path='/:id' render={(props) => <UserPage {...props} users={users} />} />
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
  loading: state.userReducer.loading
})

const mapActions = { fetchUsers };

export default connect(mapStateToProps, mapActions)(App); // Connect(props, откуда props)(component который подключаеться)

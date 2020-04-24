import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';

import { connect } from 'react-redux';
import { axiosUsers, } from '../src/actions/userActions';



const App = (props) => {
  const { axiosUsers } = props;

  useEffect(() => {
    axiosUsers();
  }, []);


  return (
    <Router>
      <div className='app'>
        <div className='mainPage'>
          <Route exact path='/' render={(props) => <UsersPage {...props} />} />
          <Route exact path='/:id' render={(props) => <UserPage {...props} />} />
        </div>
      </div>
    </Router>
  )
}

const mapStateToProps = (state) => ({
  users: state.userReducer.users,
})

const mapActions = { axiosUsers };

export default connect(mapStateToProps, mapActions)(App); // Connect(props, откуда props)(component который подключаеться)

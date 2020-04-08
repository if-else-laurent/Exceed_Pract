import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserPage from './pages/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';
import RouteTest from './pages/testRoute/RouteTest';


const App = () => {

  return (
    <Router>
      <div className='user__container'>
        <Route path='/' component={UsersPage} />
        <Route path='/:id' component={UserPage} />
        {/* <Route path='/:id' component={RouteTest} /> */}
      </div>
    </Router>
  )
}

export default App;

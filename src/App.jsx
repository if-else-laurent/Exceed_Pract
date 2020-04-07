import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import UserPage from './components/userPage/UserPage';
import UsersPage from './pages/usersPage/UsersPage';


const App = () => {

  return (
    <Router>
      <div className='user__container'>
        <Route path='/' component={UsersPage} />
        <Route path='/:id' component={UserPage} />
      </div>
    </Router>
  )
}

export default App

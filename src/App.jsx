import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
 
const App = () => {
  const [users , setUsers] = useState(null);

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  useEffect(() => {                                             // Разобраться с этим блоком
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log('Result', res.data);
        setUsers(res.data);
      }

      )
  }, [])

  console.log('users', users);
  return (
    <div>
      {users ?
        (users.map(user =>
          <div className='USER' key={user.id}>               {/* ID для каждого пользователя */}
            <header className='header'>
              <div className='header__avatar header__item'> {user.avatar ? (<img src={user.avatar} />) : (<img src='https://www.w3schools.com/howto/img_avatar.png' />)} </div>
              <div className='header__info header__item'>
                <h3> User: <span className='orange'>{user.name}</span> ({user.username}) </h3>
                <div>  email:  <a className='header__email' href='#'>{user.email}</a> </div>
              </div>
            </header>
            <div className='about'>
              <h3 className="about__header orange">Information about user:</h3>
              <div className='about__inner'>
                <div className='contacts about__inner__item'>
                  <h4 className=''> Contacts </h4>
                  <div>Number: {user.phone}</div>
                  <div>Personal page: {user.website}</div>
                  <div className='company'>
                    <h4> Company </h4>
                    <div>Company: {user.company.name}</div>
                    <div>Catch phrase: {user.company.catchPhrase}</div>
                    <div>BS: {user.company.bs}</div>
                  </div>
                </div>
                <div className='address about__inner__item'>
                  <h4>Address</h4>
                  <div>Street: {user.address.street}</div>
                  <div>Suite: {user.address.suite}</div>
                  <div>City: {user.address.city}</div>
                  <div>Zipcode: {user.address.zipcode}</div>
                  <div className='geo'> 
                    <h5 className='orange'>GEO</h5>
                    <div>LAT: {user.address.geo.lat}</div>
                    <div>LNG: {user.address.geo.lng}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>))

        : <p> Loading... </p>}
    </div>
  )
}

export default App






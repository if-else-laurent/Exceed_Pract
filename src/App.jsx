import React,{ useState, useEffect } from 'react';
import axios from 'axios';
 
const App = () => {
  const [users , setUsers] = useState(null);

  // componentDidMount() {
  //   axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       const persons = res.data;
  //       this.setState({ persons });
  //     })
  // }

  useEffect(() => {
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
      {users ? (users.map(user => <h4 key={user.id}> {user.name} </h4>)) : <p> Loading... </p>}
    </div>
  )
}

export default App






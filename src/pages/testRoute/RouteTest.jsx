import React from 'react'

const RouteTest = (props) => {
  console.log(props.match.params.id)
  const users = [
    { name: 'Leanne', id: 1, bb: 3 },
    { name: 'Ervin', id: 2, bb: 2 },
    { name: 'Clementine', id: 3, bb: 1 },
    { name: 'Patricia', id: 4, bb: 4 },
  ];

  return (
    <div>
      {users.map((user) => {    // Использование /:id в <Route> выводит все результаты, поэтому нужен фильтр
        return (
          (user.id == props.match.params.id) ? (<div> {user.name} </div>)
            : ('')
        )
      })}
    </div>
  )
}

export default RouteTest

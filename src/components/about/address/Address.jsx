import React from 'react'

const Address = (props) => {
  const { address } = props;
  return (
    <div className='address about__inner__item'>
      <h4>Address</h4>
      <div>Street: {address.street}</div>
      <div>Suite: {address.suite}</div>
      <div>City: {address.city}</div>
      <div>Zipcode: {address.zipcode}</div>
    </div>
  )
}

export default Address

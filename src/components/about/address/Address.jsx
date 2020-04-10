import React from 'react'

const Address = (props) => {
  const { address } = props;
  return (
    <div className='address about__inner__item'>
      <h4>Address</h4>
      <div> Street: {(address) ? (address.street) : (null)} </div>
      <div> Suite: {(address) ? (address.suite) : (null)} </div>
      <div> City: {(address) ? (address.city) : (null)} </div>
      <div> Zipcode: {(address) ? (address.zipcode) : (null)} </div>
      {/* {(address) ? (<div>Street: {address.street}</div>) : (null)}
      {(address) ? (<div>Suite: {address.suite}</div>) : (null)}
      {(address) ? (<div>City: {address.city}</div>) : (null)}
      {(address) ? (<div>Zipcode: {address.zipcode}</div>) : (null)} */}
      {/* <div>Street: {address.street}</div>
      <div>Suite: {address.suite}</div>
      <div>City: {address.city}</div>
      <div>Zipcode: {address.zipcode}</div> */}
    </div>
  )
}

export default Address

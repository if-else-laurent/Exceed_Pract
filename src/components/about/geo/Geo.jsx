import React from 'react';

const Geo = (props) => {
  const { address } = props;
  return (
    <div className='geo about__inner__item'>
      <h5 className='orange'>GEO</h5>
      <div> LAT: {(address) ? (address.geo.lat) : (null)} </div>
      <div> LNG: {(address) ? (address.geo.lng) : (null)} </div>
      {/* {(address) ? (<div>LAT: {address.geo.lat}</div>) : (null)}
      {(address) ? (<div>LNG: {address.geo.lng}</div>) : (null)} */}
      {/* <div>LAT: {address.geo.lat}</div>
      <div>LNG: {address.geo.lng}</div> */}
    </div>
  )
}

export default Geo;

import React from 'react';

const Geo = (props) => {
  const { address } = props;
  return (
    <div className='geo about__inner__item'>
      <h5 className='orange'>GEO</h5>
      <div>LAT: {address.geo.lat}</div>
      <div>LNG: {address.geo.lng}</div>
    </div>
  )
}

export default Geo;

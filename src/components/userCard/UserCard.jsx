import React from 'react';
import Header from '../header/Header';

const UserCard = (props) => {
  const { user: {
    avatar,
    name,
    username,
    email,
    phone,
    website,
    company,
    address,
  } } = props;
  return (
    <div className='USER__card'>
      <Header avatar={avatar} name={name} userName={username} email={email} />
      <div className='about'>
        <h3 className="about__header orange">Information about </h3>
        <div className='about__inner'>
          <div className='contacts about__inner__item'>
            <h4 className=''> Contacts </h4>
            <div>Number: {phone}</div>
            <div>Personal page: {website}</div>
            <div className='company'>
              <h4> Company </h4>
              <div>Company: {company.name}</div>
              <div>Catch phrase: {company.catchPhrase}</div>
              <div>BS: {company.bs}</div>
            </div>
          </div>
          <div className='address about__inner__item'>
            <h4>Address</h4>
            <div>Street: {address.street}</div>
            <div>Suite: {address.suite}</div>
            <div>City: {address.city}</div>
            <div>Zipcode: {address.zipcode}</div>
            <div className='geo'>
              <h5 className='orange'>GEO</h5>
              <div>LAT: {address.geo.lat}</div>
              <div>LNG: {address.geo.lng}</div>
            </div>
          </div>
        </div>
      </div>
    </div>)

}

export default UserCard
